import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerButton: {
    position: "absolute",
    padding: 11,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 40,
    bottom: 15,
    zIndex: 10
  },
  button: {
    borderRadius: 35,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 9
  },
  bottonBar: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    height: 60
  },
  background: {
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    width: 70,
    height: 70,
    bottom: 15,
    borderRadius: 35,
    alignSelf: "center",
    zIndex: 1
  }
});
