import React from 'react';
import { Image, View } from 'react-native';
import PhotoDownloadAndShare from '../components/Media/PhotoDownloadAndShare';
import styles from '../styles/views/PhotoViewStyles';

const PhotoView = ({ route }) => {
  const { imageSrc } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSrc }} style={styles.photo} />
      <PhotoDownloadAndShare imageSrc={imageSrc} />
    </View>
  );
};

export default PhotoView;