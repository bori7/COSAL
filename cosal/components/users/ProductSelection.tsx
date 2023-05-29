import React from "react";
import { PRODUCTS } from "../../constants/Products";
import { View, Text } from "../Themed";
import { Image, StyleSheet } from "react-native";

export const ProductSelection = () =>
  PRODUCTS.map((products) => (
    <View style={styles.inner}>
      <View style={styles.column}>
        <Image
          source={products.uri}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.textFont}>{products.title}</Text>
      </View>
    </View>
  ));

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    paddingLeft: 30,
    //marginTop:5
  },
  text: {
    color: "white",
  },
  mainView: {
    marginTop: 50,
  },
  secondView: {
    paddingLeft: 30,
  },
  column: {
    margin: 20,
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
