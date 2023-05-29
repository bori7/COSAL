import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { PRODUCTS, ProductType } from "../../constants/Objects";

export default function ProductPage() {
  const { productId } = useLocalSearchParams();
  useEffect(() => {
    if (productId) {
      console.log(productId);
    }
  }, [productId]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 350 }}>
        {productId && (
          <ImageBackground source={PRODUCTS?.[productId].uri}></ImageBackground>
        )}
      </View>
      <Text>ProductPAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    paddingLeft: 30,
  },
});
