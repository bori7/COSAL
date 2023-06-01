import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { PRODUCTS, ProductType } from "../../constants/Objects";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import CartIcon from "../../components/users/CartIcon";

export default function ProductPage() {



  const { productId, title, rating, category, price, item } =
    useLocalSearchParams();

  const router = useRouter();
  useEffect(() => {
    if (productId) {
      console.log(productId);
      console.log(title);
    }
  }, [productId]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 350 }}>
        {productId && (
          <ImageBackground
            source={PRODUCTS[productId]?.uri}
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
      <View>
        <Text style={styles.MainText}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AntDesign name="star" color={"#F8A23B"} size={15} />
            <Text style={{ marginHorizontal: 6, color: "grey" }}>{rating}</Text>
            <Text style={{ color: "grey" }}>Ratings</Text>
          </View>

          <View>
            <Text style={{ marginHorizontal: 6, color: "grey" }}>
              2.3K + Reviews
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "grey" }}>{item}+</Text>
            <Text style={{ marginHorizontal: 6, color: "grey" }}>Sold</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row",justifyContent: "space-evenly", }}>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              height: 50,
              width: 40,
              justifyContent: "center",   
            }}
          >
            <MaterialIcons
              name="house-siding"
              size={20}
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              height: 50,
              width: 150,
              justifyContent: "space-evenly",
              flexDirection: "row",
              backgroundColor:"black"
            }}
          >
             <MaterialCommunityIcons
              name="paperclip"
              size={20}
              color={"white"}
              style={{
                transform: [{ rotate: "90deg" }],
               
                height: 30,
                width: 30,
                alignSelf: "center",
                marginTop:10
              }}
            />
            <Text style={{ alignSelf: "center",color:"white" }}>Cosell</Text>
           
            <SimpleLineIcons name="arrow-down" size={15} color={"white"} style={{alignSelf:"center"}}/>
          </View>
          <View  style={{
              borderColor: "black",
              borderWidth: 1,
              height: 50,
              width: 110,
              justifyContent: "center",
              flexDirection:"row"
              
            }}>
              <SimpleLineIcons name="basket" size={20} style={{alignSelf: "center"}}/>
            <Text style={{alignSelf: "center"}}>
                Add to Cart
            </Text>
          </View>
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
  mainView: {
    marginTop: 50,
    backgroundColor: Colors.light.transparent,
  },
  MainText: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },
});
