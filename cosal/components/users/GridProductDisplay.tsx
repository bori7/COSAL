import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { PRODUCTS } from "../../constants/Objects";
import React from "react";
import Colors from "../../constants/Colors";

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

            <View style={styles.subInner}>
              <Text style={{ color: "grey", marginBottom: 4 }}>
                {item.category}
              </Text>
              <Text style={styles.textFont}>{item.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
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
                  <Text
                    style={{
                      fontSize: 21,
                      color: Colors.light.price,
                      fontWeight: "bold",
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
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
    fontFamily: "Inter",
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
  image: {
    width: "100%",
    height: 160,
  },
  textFont: {
    fontSize: 15,
  },
  subInner: {
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 30,
  },
});
