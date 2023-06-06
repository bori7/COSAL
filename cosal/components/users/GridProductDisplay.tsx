import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "../Themed";
import { PRODUCTS } from "../../constants/Objects";
import React from "react";
import Colors from "../../constants/Colors";
import ProductCard from "./ProductCard";

export const GridProductDisplay = () => {
  const [data, setData] = useState(PRODUCTS);
  return (
    <View style={styles.grid}>
      {data &&
        data?.map((item, index) => (
          <View key={`#${item.key}`} style={styles.inner}>
            <ProductCard item={item} index={index} />
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
  },
  inner: {
    width: "48%",
    marginBottom: 35,
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
