import React from "react";

import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const { background, textStyle } = styles;

  return (
    <View style={background}>
      <Feather name="search" size={30} />
      <TextInput
        placeholder={"Search"}
        style={textStyle}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 20,
    paddingHorizontal: 15,
    flex: 1,
  },
});

export default SearchBar;
