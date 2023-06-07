import React from "react";
import { View, Text } from "../Themed";
import Colors from "../../constants/Colors";
import { LabelType } from "../../constants/Objects";

export default function LabelDetails({ labels }: { labels: LabelType[] }) {
  return (
    <View
      style={{
        backgroundColor: Colors.light.details,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <View style={{ backgroundColor: Colors.light.details }}>
        {labels.map((label, index) => (
          <View
            key={index}
            style={{
              paddingVertical: 18,
              borderBottomWidth: 0.3,
              borderBottomColor:
                index === labels.length - 1
                  ? Colors.light.transparent
                  : Colors.light.cogrey,
              flexDirection: "row",
              alignItems: "flex-start",
              backgroundColor: Colors.light.details,
            }}
          >
            <Text
              style={{
                color: Colors.light.cogrey,
                fontWeight: "600",
                fontSize: 15,
              }}
            >
              {label.label}:{" "}
            </Text>
            <Text
              style={{
                color: Colors.light.cogrey,
                fontSize: 15,
              }}
            >
              {label.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
