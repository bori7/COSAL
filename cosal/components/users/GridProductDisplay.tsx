import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { PRODUCTS } from "../../constants/Products";
import React from "react";

export const GridProductDisplay = () => {
  const [data, setData] = useState(PRODUCTS);
  return (
    <View style={styles.grid}>
      {data &&
        data?.map((item) => (
          <View key={`#${item.key}`} style={styles.inner}>
            <Pressable
              onPress={() => {
                //   navigation.navigate("ProductDetails");
              }}
            >
              <Image
                source={item.uri}
                style={styles.image}
                resizeMode={"cover"}
              />
            </Pressable>
            <Text style={styles.textFont}>{item.category}</Text>
            <Text style={styles.textFont}>{item.title}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <AntDesign name="star" color={"#F8A23B"} size={15} />
                <Text style={{ marginHorizontal: 6, color: "grey" }}>
                  {item.rating}
                </Text>
                <View style={{ justifyContent: "center", marginBottom: 4 }}>
                  <Text style={{ color: "grey" }}>.</Text>
                </View>

                <Text style={{ color: "grey" }}>{item.item}</Text>
              </View>

              <View style={{ alignSelf: "flex-end" }}>
                <Text style={{ fontSize: 20, color: "green" }}>
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
    padding: 5,
  },
  inner: {
    marginRight: 30,
    marginBottom: 30,
    width: 140,
  },
  image: {
    width: 140,
    height: 100,
  },
  textFont: {
    fontSize: 12,
  },
});
