import React from "react";
import { TouchableOpacity, Animated, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function BottomAppButton({
  animationStyle,
  label,
  labelAnimationStyle,
  click,
  iconName,
  iconColor,
  buttonColor,
  labelColor,
  fontSize
}) {
  const { button, labelStyle, buttonContainer } = styles;
  return (
    <TouchableOpacity
      style={[
        button,
        buttonContainer,
        animationStyle,
        { backgroundColor: buttonColor }
      ]}
      onPress={click}
    >
      <Animated.Text
        style={[
          labelStyle,
          labelAnimationStyle,
          { color: labelColor, width: 100, fontSize: fontSize }
        ]}
      >
        {label}
      </Animated.Text>
      <Icon name={iconName} type="material" color={iconColor} size={28} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 35,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 26.3,
    zIndex: 2
  },
  labelStyle: {
    color: "#fff",
    position: "absolute",
    fontSize: 18,
    backgroundColor: "transparent",
    width: 70,
    textAlign: "center"
  }
});

BottomAppButton.propTypes = {
  animationStyle: PropTypes.object,
  label: PropTypes.string,
  labelAnimationStyle: PropTypes.object,
  click: PropTypes.func,
  button: PropTypes.object,
  labelColor: PropTypes.string,
  buttonColor: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  labelStyle: PropTypes.object,
  buttonContainer: PropTypes.object,
  fontSize: PropTypes.number
};

BottomAppButton.defaultProps = {
  buttonColor: "#4c8bf5",
  iconColor: "#000",
  labelColor: "#fff",
  iconName: "add",
  label: ""
};

export default BottomAppButton;
