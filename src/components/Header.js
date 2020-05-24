import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text
        style={{
          fontFamily: "The-Blacklist",
          fontSize: 35,
        }}
      >
        Integra
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    paddingTop: StatusBar.currentHeight,
    left: 0,
    right: 0,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
  },
  headerContent: {
    flexDirection: "row",
  },
});

export default Header;
