import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomAppContainer, BottomAppButton } from "bottom-app-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <BottomAppContainer>
        <BottomAppButton />
        <BottomAppButton />
      </BottomAppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
