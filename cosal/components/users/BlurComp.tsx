import { BlurView } from "expo-blur";
import React from "react";
import { View, Text } from "react-native";

export default function BlurComp() {
  return (
    <BlurView
      intensity={100}
      style={{
        width: 230,
        height: 140,
        position: "absolute",
        top: 120,
      }}
    >
      <Text
        style={{
          fontWeight: "900",
          color: "white",
          fontSize: 20,
          paddingTop: 10,
          paddingLeft: 10,
        }}
      >
        Check out New and Trending Products
      </Text>
      <View
        style={{
          marginTop: 30,
          marginLeft: 10,
          width: 110,
          height: 40,
          backgroundColor: "black",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            alignItems: "center",
            top: 10,
          }}
        >
          Check this out
        </Text>
      </View>
    </BlurView>
  );
}
