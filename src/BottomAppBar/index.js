import React from "react";
import { TouchableOpacity, Animated, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Icon from "@expo/vector-icons/MaterialIcons";

function BottomAppBar({ animation, toggleOpen, barColor, buttonColor }) {
  const buttonRotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"]
  });

  const iconStyle = {
    transform: [
      {
        rotate: buttonRotate
      }
    ]
  };

  const backgroundStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 30]
        })
      }
    ]
  };

  const { containerButton, button, bottonBar, background } = styles;

  return (
    <>
      <TouchableOpacity onPress={() => toggleOpen()} style={containerButton}>
        <Animated.View
          style={[button, iconStyle, { backgroundColor: buttonColor }]}
        >
          <Icon name="add" type="material" color="#000" reverse size={28} />
        </Animated.View>
      </TouchableOpacity>
      <View style={[bottonBar, { backgroundColor: barColor }]}></View>
      <Animated.View
        style={[background, backgroundStyle]}
        onStartShouldSetResponder={() => toggleOpen()}
      />
    </>
  );
}

const styles = StyleSheet.create({
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

BottomAppBar.propTypes = {
  animation: PropTypes.object,
  toggleOpen: PropTypes.func,
  containerButton: PropTypes.object,
  button: PropTypes.object,
  bottonBar: PropTypes.object,
  background: PropTypes.object,
  barColor: PropTypes.string,
  buttonColor: PropTypes.string
};

BottomAppBar.defaultProps = {
  barColor: "#4c8bf5",
  buttonColor: "#f00"
};

export default BottomAppBar;
