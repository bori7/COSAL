import React from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function CartIcon() {
  return (
    <View
      style={{
        padding: 2,
        backgroundColor: Colors.light.transparent,
        height: 50,
        marginRight: 20,
      }}
    >
      <View
        style={{
          borderRadius: 8,
          backgroundColor: "#ECA789",
          alignItems: "center",
          justifyContent: "center",
          width: 15,
          height: 15,
          padding: 1,
          alignSelf: "flex-end",
        }}
      >
        <Text style={{ color: "#97350B", fontSize: 10 }}>1</Text>
      </View>

      <SimpleLineIcons size={30} name="basket" color={"white"} />
    </View>
  );
}
