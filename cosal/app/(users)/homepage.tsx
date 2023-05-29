import { BlurView } from "expo-blur";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { CATEGORIES, BACKGROUNDS } from "../../constants/Objects";
import { GridProductDisplay } from "../../components/users/GridProductDisplay";
import { View, Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Homepage({}) {
  const [index, setIndex] = useState(0);
  const [catIndex, setCatIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 380 }}>
        <ImageBackground source={BACKGROUNDS[index]} style={styles.background}>
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
              <View
                style={{
                  borderColor: "white",
                  height: 50,
                  width: "80%",
                  borderWidth: 1,
                  backgroundColor: Colors.light.transparent,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather
                  name="search"
                  color={"white"}
                  style={{
                    marginHorizontal: 15,
                    fontSize: 19,
                  }}
                />

                <TextInput
                  placeholder="Search ..."
                  placeholderTextColor={"white"}
                  style={{ fontSize: 17 }}
                />
              </View>

              <View
                style={{
                  padding: 2,
                  backgroundColor: Colors.light.transparent,
                  height: 50,
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    borderRadius: 8,
                    backgroundColor: "#ECA789",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 15,
                    height: 15,
                    padding: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Text style={{ color: "#97350B", fontSize: 10 }}>1</Text>
                </View>

                <Entypo size={30} name="shopping-basket" color={"white"} />
              </View>
            </View>
            <BlurView
              intensity={100}
              style={{
                width: 230,
                height: 140,
                position: "absolute",
                top: 150,
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
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          marginLeft: 30,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="view-dashboard-outline"
          color="black"
          style={{ paddingRight: 10, fontSize: 25, fontWeight: "normal" }}
        />
        <Text>Categories</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.categoriesStyle}
        contentContainerStyle={styles.categoriesContentStyle}
      >
        {CATEGORIES.map((d, index) => {
          return (
            <Pressable
              key={`#${index}`}
              style={
                catIndex !== index ? styles.category : styles.categoryActive
              }
              onPress={() => {
                setCatIndex(index);
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  color: `${catIndex != index ? "grey" : Colors.light.text}`,
                }}
              >
                {d}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <ScrollView
        style={styles.secondView}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "700", marginVertical: 10, fontSize: 18 }}>
            Popular Products
          </Text>
        </View>

        <View>
          <GridProductDisplay />
        </View>

        <Text
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "black",
            width: "35%",
            alignSelf: "center",
            fontSize: 18,
            paddingVertical: 11,
            marginBottom: 22,
          }}
        >
          See more
        </Text>

        <Text style={{ fontWeight: "700", marginVertical: 20, fontSize: 18 }}>
          All Products
        </Text>

        <View>
          <GridProductDisplay />
          <GridProductDisplay />
          <GridProductDisplay />
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: Colors.light.transparent,
  },
  categoriesStyle: {
    marginTop: 20,
    backgroundColor: Colors.light.greyCategory,
    height: 100,
  },
  categoriesContentStyle: {
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    marginRight: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryActive: {
    backgroundColor: Colors.light.background,
    marginRight: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
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
