const express = require('express');
const router = express.Router();
const Image = require('../../../models/image');
const { body, validationResult } = require('express-validator');
const upload = require('multer')({ dest: 'uploads/', limits: { fieldSize: 50 * 1024 * 1024 } });
const { updateNewsArticleById } = require('../../../repository/newsArticle');
const { updateImageById } = require('../../../repository/image');
const fs = require('fs');
const path = require('path');
const { authenticateToken } = require('../../../middlewares/auth');

router.use(express.json());

router.post('/', authenticateToken, upload.single('bannerImage'), [
    body('title').trim().isString(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { _id: id, title, originalImageId, content } = req.body;
        if (!id || !title || !content) {
            return res.status(500).send('Could not create news article.');
        }

        let bannerImage;

        if (req.file && req.file.path) {
            const filePath = path.join(__dirname, '../../..', req.file.path);
            const imageBuffer = fs.readFileSync(filePath);

            bannerImage = new Image({
                name: req.file.originalname,
                data: imageBuffer,
                contentType: req.file.mimetype
            });
        }

        if (bannerImage) {
            await updateImageById(originalImageId, bannerImage.name, bannerImage.data, bannerImage.contentType);
        }
        await updateNewsArticleById(id, title, content);
    } catch (err) {
        console.error(err);
        res.status(500).json(`Could not update news article: ${err}`);
    }
});

module.exports = router;