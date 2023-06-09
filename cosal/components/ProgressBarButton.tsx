import React, { useRef, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

export const ProgressBarButton = ({
  buttonStyle,
  cWidth,
  pad,
  setExternalProgress,
}: {
  buttonStyle: StyleProp<ViewStyle>;
  cWidth: number;
  pad: number;
  setExternalProgress: Function;
}) => {
  const BUTTON_WIDTH = cWidth || 50;
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const BUTTON_HEIGHT = cWidth || 50;
  const ALLOWANCE = DEVICE_WIDTH - BUTTON_WIDTH * 2;

  const position = useRef(new Animated.Value(0));
  const [percentage, setPercentage] = useState(0);

  const onHandlerStateChange = (event: {
    nativeEvent: { state: number; translationX?: any };
  }) => {
    const { translationX } = event.nativeEvent;
    let newPosition = position?.current?._value || 0;

    newPosition = Math.min(
      Math.max(newPosition + translationX, pad),
      ALLOWANCE
    );

    position?.current.setValue(newPosition);

    const newPercentage = Math.round((newPosition / ALLOWANCE) * 100);
    setExternalProgress(newPercentage);
    setPercentage(newPercentage);
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          style={[
            styles.button,
            {
              width: BUTTON_WIDTH,
              height: BUTTON_HEIGHT,
              borderRadius: BUTTON_HEIGHT / 2,
            },
            { transform: [{ translateX: position?.current }] },
            buttonStyle,
          ]}
        >
          <Text style={styles.buttonText}>{percentage}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "green",
  },
  buttonText: {
    color: "green",
    fontSize: 12,
    fontWeight: "500",
  },
});
