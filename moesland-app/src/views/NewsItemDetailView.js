import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import NewsItemContentView from './NewsItemContentView';

export default class NewsItemListView extends Component {
    state = {
        imageHeight: null,
        item: this.props.route.params.item,
    };

    handleImageLayout = () => {
        const { width } = Dimensions.get('window');
        const aspectRatio = this.getImageAspectRatio();
        const imageHeight = width / aspectRatio;
        this.setState({ imageHeight });
    };

    getImageAspectRatio = () => {
        const { item } = this.state;
        const source = Image.resolveAssetSource(item.bannerImage);
        return source.width / source.height;
    };

    render() {
        const { item } = this.props.route.params;
        const { imageHeight } = this.state;

        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* <Image
                        source={item.bannerImage}
                        onLayout={this.handleImageLayout}
                        style={[styles.bannerImage, { height: imageHeight }]}
                        resizeMode="contain"
                    /> */}
                    <Text style={styles.title}>{item.title}</Text>
                    {item.content.map((content, index) => (
                        <NewsItemContentView key={index} content={content} />
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bannerImage: {
        width: '100%',
        marginBottom: 10,
    },
    image: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
        padding: 5,
        textAlign: "left",
    },
    boldText: {
        fontWeight: 'bold',
    }
});

