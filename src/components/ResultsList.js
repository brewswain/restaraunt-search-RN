import React from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";

const ResultsList = ({ title, businesses }) => {
  const { titleStyle } = styles;

  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={businesses}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
