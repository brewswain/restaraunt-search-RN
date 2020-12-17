import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "../components";
import yelp from "../api/yelp";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const { navigate } = props.navigation;
  const {} = styles;

  const searchApi = async () => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });

      setBusinesses(res.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
