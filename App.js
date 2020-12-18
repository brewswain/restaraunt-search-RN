import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ResultsShowScreen, SearchScreen } from "./src/screens";

// Left in to remind me that i have .env configured
//
// console.log(process.env.CLIENT_ID);
// console.log(process.env.API_KEY);

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);
