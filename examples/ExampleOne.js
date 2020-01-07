import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { BottomAppContainer, BottomAppButton } from "bottom-app-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I'm an App!</Text>
      <BottomAppContainer barColor={"#48c242"} buttonColor={"#ed952f"}>
        <BottomAppButton
          label={"Pokemons"}
          buttonColor={"#fff"}
          iconName={"pokeball"}
          iconColor={"#bf440f"}
          labelColor={"#f00"}
          click={() => Alert.alert("Pokemons")}
        />
        <BottomAppButton
          label={"Near by"}
          buttonColor={"#a6e647"}
          iconName={"pokemon-go"}
          iconColor={"#f065a6"}
          labelColor={"#cdf8fa"}
          click={() => Alert.alert("Near by Pokemons")}
        />
        <BottomAppButton
          label={"Duel"}
          buttonColor={"#559be6"}
          iconName={"sword-cross"}
          iconColor={"#ebd34d"}
          labelColor={"#b75ef2"}
          click={() => Alert.alert("Duel Started")}
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
