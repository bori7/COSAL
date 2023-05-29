import { BlurView } from "expo-blur";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  View,
  Text,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CATEGORIES, BACKGROUNDS } from "../../constants/Products";
import { GridProductDisplay } from "../../components/users/GridProductDisplay";
// import {} from "../../components/Themed";

export default function Homepage({}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <View style={{ height: 380 }}>
        <ImageBackground source={BACKGROUNDS[index]} style={styles.background}>
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
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <MaterialIcons name="category" size={20} style={{ paddingRight: 10 }} />
        <Text>Categories</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {CATEGORIES.map((d, index) => {
          return (
            <Pressable key={`#${index}`}>
              <Text style={{ marginRight: 20, fontSize: 15 }}>{d}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <ScrollView style={styles.secondView}>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "700", marginVertical: 10 }}>
            Popular Products
          </Text>
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
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    paddingLeft: 30,
  },
  text: {
    color: "white",
  },
  mainView: {
    marginTop: 50,
  },
  secondView: {
    marginHorizontal: 30,
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
