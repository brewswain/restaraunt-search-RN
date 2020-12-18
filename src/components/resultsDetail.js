import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

const ResultsDetail = ({
  result: { image_url, name, rating, review_count },
}) => {
  const { imageStyle, nameStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={{ uri: image_url }} />
      <Text style={nameStyle}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 220,
    height: 130,
    borderRadius: 8,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
