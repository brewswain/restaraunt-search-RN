import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ResultsDetail from "./resultsDetail";

// HOC that gives us access to the 'navigation' object
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, businesses, navigation: { navigate } }) => {
  const { viewStyle, titleStyle } = styles;

  if (!businesses.length) {
    return null;
  }

  return (
    <View style={viewStyle}>
      <Text style={titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={businesses}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate("Results", {
                  id: item.id,
                });
              }}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);
