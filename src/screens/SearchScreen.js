import React, { useState } from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ResultsList, SearchBar } from "../components";
import { useResults } from "../hooks";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, businesses, errorMessage] = useResults();

  const {} = styles;

  const filterResultsByPrice = (price) => {
    return businesses.filter((business) => {
      return business.price === price;
    });
  };

  const doesPriceExist = (price) => {
    return filterResultsByPrice(price).length;
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
