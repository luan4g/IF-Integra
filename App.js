import React from "react";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Angelina: require("./assets/fonts/Angelina.ttf"),
    "Cherishing-Moments": require("./assets/fonts/Cherishing.ttf"),
    "The-Blacklist": require("./assets/fonts/Blacklist.ttf"),
    Daylove: require("./assets/fonts/Daylove.ttf"),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return <Routes />;
}
