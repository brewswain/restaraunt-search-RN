import React, { useEffect, useState } from "react";

import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation: { getParam } }) => {
  const [business, setBusiness] = useState(null);

  // If we look at our ResultsList, we passed in 'id' as a
  // second parameter with our navigation call. (ln 30)
  // Obviously, this is super useful as we can get the entire
  // shape of our data as needed passed through this prop.
  const id = getParam("id");
  const { imageStyle, textStyle, viewStyle } = styles;

  const getBusiness = async (id) => {
    const res = await yelp.get(`/${id}`);
    setBusiness(res.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (!business) {
    return null;
  }

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: { alignItems: "center", flex: 1 },

  imageStyle: {
    height: 200,
    width: 300,
    margin: 10,
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
});

export default ResultsShowScreen;
