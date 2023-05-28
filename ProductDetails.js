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





export default function ProductDetails({navigation}){
  return (
    <View style={{ height: 380 }}>
    <ImageBackground source={require("./assets/CarBg.png")} style={styles.background}>
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
  )
}

