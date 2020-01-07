import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import { BottomAppContainer, BottomAppButton } from "bottom-app-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I'm an App!</Text>
      <BottomAppContainer>
        <BottomAppButton
          label={"Cars"}
          buttonColor={"#fff"}
          iconName={"car"}
          iconColor={"#46f098"}
          click={() => Alert.alert("Cars click")}
        />
        <BottomAppButton
          label={"Buses"}
          buttonColor={"#fff"}
          iconName={"bus"}
          iconColor={"#bf440f"}
          click={() => Alert.alert("Buses click")}
        />
        <BottomAppButton
          label={"Trains"}
          buttonColor={"#fff"}
          iconName={"train"}
          iconColor={"#ded643"}
          click={() => Alert.alert("Trains click")}
        />
        <BottomAppButton
          label={"Ships"}
          buttonColor={"#fff"}
          iconName={"ferry"}
          iconColor={"#41b5d9"}
          click={() => Alert.alert("Ships click")}
        />
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
