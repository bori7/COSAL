import { BlurView } from "expo-blur";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const backgrounds = [
  require("./assets/AccessoriesBg.png"),
  require("./assets/PhoneBg.png"),
  require("./assets/CarBg.png"),
  require("./assets/HomeBg.png"),
];

const categories = ["All", "Electronics", "Computers", "Vehicles", "Property"];

const products = [
  {
    key: 1,
    category: "Fashion",
    uri: require("./assets/ClothesSale.png"),
    title: "Essentials for Women Summer outfit",
    price: "\u00A3" + 7,
    item: 100,
    rating: 4.9,
  },
  {
    key: 2,
    category: "Computers",
    uri: require("./assets/LaptopSale.png"),
    title: "2019 Macbook Pro, 16gb Ram, 1Tb",
    price: "\u00A3" + 1000,
    item: 100,
    rating: 4.9,
  },
  {
    key: 3,
    category: "Electronics",
    uri: require("./assets/houseSale.png"),
    title: "Room lamp, with lamp cover and stand",
    price: "\u00A3" + 25,
    item: 100,
    rating: 4.9,
  },
  {
    key: 4,
    category: "Vehicles",
    uri: require("./assets/carSale.png"),
    title: "Audi R6, V8, white four doors",
    price: "\u00A3" + 7000,
    item: 100,
    rating: 4.9,
  },
];

const ProductSelection = () =>
  products.map((products) => (
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

const GridProductDisplay = () => {
  const [data, setData] = useState(products);
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <Pressable
            style={styles.inner}
            onPress={() => {
              navigation.navigate("ProductDetails");
            }}
          >
            <Image
              source={item.uri}
              style={styles.image}
              resizeMode={"contain"}
            />
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
          </Pressable>
        );
      }}
    ></FlatList>
  );
};

export default function Homepage({navigation}){
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <>
      <View style={{ height: 380 }}>
        <ImageBackground source={backgrounds[index]} style={styles.background}>
          <View style={styles.mainView}>
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                width: 270,
                height: 30,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                top: 30,
              }}
            >
              <Feather
                name="search"
                color={"white"}
                style={{ paddingRight: 20 }}
              />

              <TextInput
                placeholder="Search ..."
                placeholderTextColor={"white"}
                style={{ width: 250 }}
              />
              <View style={{ padding: 2 }}>
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#ECA789",
                    alignItems: "center",
                    width: 13,
                    height: 13,
                    left: 7,
                  }}
                >
                  <Text style={{ color: "#97350B" }}>1</Text>
                </View>
                <Entypo size={20} name="shopping-basket" color={"white"} />
              </View>
              <BlurView
                intensity={100}
                style={{
                  width: 230,
                  height: 140,
                  position: "absolute",
                  top: 110,
                }}
              >
                <Text
                  style={{
                    fontWeight: "900",
                    color: "white",
                    fontSize: 20,
                    paddingTop: 10,
                    paddingLeft: 10,
                  }}
                >
                  Check out New and Trending Products
                </Text>
                <View
                  style={{
                    marginTop: 30,
                    marginLeft: 10,
                    width: 110,
                    height: 40,
                    backgroundColor: "black",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      alignItems: "center",
                      top: 10,
                    }}
                  >
                    Check this out
                  </Text>
                </View>
              </BlurView>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.secondView}>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <MaterialIcons
            name="category"
            size={20}
            style={{ paddingRight: 10 }}
          />
          <Text>Categories</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          {categories.map((d) => {
            return (
              <Pressable>
                <Text style={{ marginRight: 20, fontSize: 15 }}>{d}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "700" }}>Popular Products</Text>
        </View>

        <View>
          <GridProductDisplay />
        </View>

        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
            width: 110,
            height: 40,
            backgroundColor: "black",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              alignItems: "center",
              top: 10,
            }}
          >
            See more
          </Text>
        </View>

        <View>
          <Text style={{ fontWeight: "700" }}>All Products</Text>
        </View>

        <View>
          <GridProductDisplay />
          <GridProductDisplay />
        </View>
      </ScrollView>
    </>
  );
};

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


