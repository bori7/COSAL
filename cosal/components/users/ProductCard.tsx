import React from "react";
import { View, Text } from "../Themed";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { ProductType } from "../../constants/Objects";

export default function ProductCard({
  item,
  index,
}: {
  item: ProductType;
  index: number;
}) {
  const router = useRouter();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          //   console.log("I am pressed::", index);
          router.push({
            pathname: "/(users)/productpage",
            params: {
              productId: index,
            },
          });
        }}
      >
        <Image source={item?.uri} style={styles.image} resizeMode={"cover"} />
      </TouchableOpacity>
      <View style={styles.subInner}>
        <View>
          <Text style={{ color: "grey", marginBottom: 4 }}>
            {item?.category}
          </Text>
        </View>
        <View>
          <Text style={styles.textFont}>{item?.title}</Text>
        </View>
      </View>

      <View style={{ paddingLeft: 15, paddingRight: 10, marginBottom: 15 }}>
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
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" color={"#F8A23B"} size={15} />
            <Text style={{ marginHorizontal: 6, color: "grey" }}>
              {item?.rating}
            </Text>
            <View style={{ justifyContent: "center", marginBottom: 4 }}>
              <Text style={{ color: "grey" }}>.</Text>
            </View>

            <Text style={{ color: "grey" }}>{item?.item}</Text>
          </View>

          <View style={{ alignSelf: "flex-end", marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 21,
                color: Colors.light.price,
                fontWeight: "bold",
              }}
            >
              {item?.price}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 160,
  },
  textFont: {
    fontSize: 15,
  },
  subInner: {
    // borderWidth: 1,
    flexDirection: "column",
    marginHorizontal: 15,
    marginTop: 20,
    flex: 1,
    marginBottom: 20,
  },
});
