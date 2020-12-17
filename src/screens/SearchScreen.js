import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { ResultsList, SearchBar } from "../components";
import { useResults } from "../hooks";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [searchApi, businesses, errorMessage] = useResults();

  const { navigate } = props.navigation;
  const {} = styles;

  const filterResultsByPrice = (price) => {
    return businesses.filter((business) => {
      return business.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
      <ResultsList
        businesses={filterResultsByPrice("$")}
        title="Cost Effective"
      />
      <ResultsList
        businesses={filterResultsByPrice("$$")}
        title="Bit Pricier"
      />
      <ResultsList
        businesses={filterResultsByPrice("$$$")}
        title="Big Spender"
      />
      <ResultsList businesses={filterResultsByPrice("$$$$")} title="Bougie" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
