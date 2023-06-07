import React from "react";
import { StyleSheet } from "react-native";
import { ProductType } from "../../constants/Objects";
import { View, Text } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function ProductHeaderInfo({
  product,
}: {
  product: ProductType;
}) {
  return (
    <View>
      <Text style={styles.MainText}>{product?.title}</Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="star" color={"#F8A23B"} size={15} />
          <Text style={{ marginHorizontal: 8, color: Colors.light.cogrey }}>
            {product?.rating}
          </Text>
          <Text style={{ color: Colors.light.cogrey }}>Ratings</Text>
          <Text
            style={{
              fontSize: 30,
              color: Colors.light.cogrey,
              bottom: 8,
              marginHorizontal: 15,
            }}
          >
            .
          </Text>

          <Text style={{ color: Colors.light.cogrey }}>2.3K+ Reviews</Text>

          <Text
            style={{
              fontSize: 30,
              color: Colors.light.cogrey,
              bottom: 8,
              marginHorizontal: 15,
            }}
          >
            .
          </Text>

          <Text style={{ color: Colors.light.cogrey }}>{product?.item}+</Text>
          <Text style={{ color: Colors.light.cogrey, marginLeft: 5 }}>
            Sold
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
  },
  otherProduct: {
    width: 200,
    marginRight: 10,
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  mainView: {
    marginTop: 50,
    backgroundColor: Colors.light.transparent,
  },
  MainText: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },
  categoriesStyle: {
    // borderWidth: 1,
    paddingBottom: 40,
  },
  categoriesContentStyle: {
    // borderWidth: 1,
    marginVertical: 10,
  },
  footer: {
    // borderWidth: 1,
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 5,
      height: -10,
    },
    elevation: 9,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    padding: 10,
  },
});
