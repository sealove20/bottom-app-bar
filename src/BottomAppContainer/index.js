import React from "react";
import { Animated } from "react-native";
import PropTypes from "prop-types";

import BottomAppBar from "../BottomAppBar";

function BottomAppContainer({ children, barColor, buttonColor }) {
  const animation = new Animated.Value(0);
  let toggle = false;

  function toggleOpen() {
    const toValue = toggle ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: true
    }).start();

    toggle = !toggle;
  }

  const labelPositionInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-0, 40]
  });

  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1]
  });

  const labelAnimationStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateY: labelPositionInterpolate
      }
    ]
  };

  const animationSet = {
    "1": [
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0]
            })
          }
        ]
      }
    ],
    "2": [
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -50]
            })
          }
        ]
      },
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50]
            })
          }
        ]
      }
    ],
    "3": [
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -70]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -90]
            })
          }
        ]
      },
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -120]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0]
            })
          }
        ]
      },
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -70]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 90]
            })
          }
        ]
      }
    ],
    "4": [
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -70]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -120]
            })
          }
        ]
      },
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -140]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -50]
            })
          }
        ]
      },
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -140]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50]
            })
          }
        ]
      },
      {
        transform: [
          {
            scale: animation
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -70]
            })
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 120]
            })
          }
        ]
      }
    ]
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const childrenCount = React.Children.count(children);
        return React.cloneElement(child, {
          animationStyle: animationSet[childrenCount][index],
          labelAnimationStyle: labelAnimationStyle
        });
      })}
      <BottomAppBar
        animation={animation}
        toggleOpen={toggleOpen}
        barColor={barColor}
        buttonColor={buttonColor}
      />
    </>
  );
}

BottomAppContainer.propTypes = {
  children: PropTypes.array,
  barColor: PropTypes.string,
  buttonColor: PropTypes.string
};

BottomAppContainer.defaultProps = {
  barColor: "#4c8bf5",
  buttonColor: "#f00"
};

export default BottomAppContainer;
