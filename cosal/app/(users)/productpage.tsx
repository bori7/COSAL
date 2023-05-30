import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { PRODUCTS, ProductType } from "../../constants/Objects";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import CartIcon from "../../components/users/CartIcon";

export default function ProductPage() {
  const { productId } = useLocalSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (productId) {
      console.log(productId);
    }
  }, [productId]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 350 }}>
        {productId && (
          <ImageBackground
            source={PRODUCTS?.[productId].uri}
            style={styles.background}
          >
            <View style={styles.mainView}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: Colors.light.transparent,
                }}
              >
                <AntDesign
                  name="left"
                  color={"white"}
                  style={{
                    marginHorizontal: 15,
                    fontSize: 19,
                  }}
                  onPress={() => {
                    router.back();
                  }}
                />

                <CartIcon />
              </View>
            </View>
          </ImageBackground>
        )}
      </View>
      <Text>ProductPAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
  },
  mainView: {
    marginTop: 50,
    backgroundColor: Colors.light.transparent,
  },
});
