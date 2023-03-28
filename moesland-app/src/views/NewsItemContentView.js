import React from 'react';
import { Text, Image, StyleSheet, Linking } from 'react-native';

export default function NewsItemContent({ content }) {
  const { text, attributes } = content;
  const { bold, italic, underline, align, size, header, link } = attributes;

  // Apply styles based on attribute values
  const textStyles = [
    styles.text,
    bold && styles.bold,
    italic && styles.italic,
    underline && styles.underline,
    size === 'small' && styles.smallText,
    size === 'large' && styles.largeText,
    size === 'huge' && styles.hugeText,
    header === 1 && styles.h1,
    header === 2 && styles.h2,
  ];

  if(align === undefined) {
    textStyles.textAlign = 'left'
    console.log("Undefined:", text)
    
  } else {
    textStyles.textAlign = align
    console.log(text)
  }

  if (text && !/^\s*$/.test(text)) {
    return (
      <Text style={textStyles} onPress={() => link && Linking.openURL(link)}>
        {text}
      </Text>
    );
  } else if (content.image) {
    return (
      <Image
        source={content.image}
        onLayout={this.handleImageLayout}
        style={[styles.image, { height: 450 }]}
        resizeMode="contain"
      />
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    padding: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  smallText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 20,
  },
  hugeText: {
    fontSize: 32,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
