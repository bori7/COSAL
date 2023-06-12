import { StyleSheet, Image, Dimensions, StatusBar } from "react-native";
import React from "react";
import { View, Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { IMAGES } from "../../constants/Images";

const screenWidth = Dimensions.get("screen").width;
const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top}>
        <View
          style={{
            backgroundColor: Colors.light.transparent,
            borderWidth: 1,
            borderColor: Colors.light.background,
            width: "80%",
            // height: 50,
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 10,
            paddingVertical: 7,
          }}
        >
          <Text
            style={{
              color: Colors.light.background,
              fontSize: 25,
              fontWeight: "600",
            }}
          >
            Sell your own Products
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.light.transparent,
            right: -25,
          }}
        >
          <Image
            source={IMAGES.sellerBg}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ backgroundColor: Colors.light.transparent }}>
          <Text
            style={{
              color: Colors.light.background,
              //   fontSize: 42,
              fontSize: screenWidth * 0.09,
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            Lets help you Create your Store
          </Text>
          <Text
            style={{
              color: Colors.light.background,
              fontSize: 18,
              marginBottom: 20,
            }}
          >
            {"whatever it is you want to sell, we’ve got you covered"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            marginHorizontal: 12,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 17, marginRight: 20 }}>
            Active shop
          </Text>
          <Feather name="arrow-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    // flex: 5,
    backgroundColor: Colors.light.price,
    // borderWidth: 1,
    width: "100%",
    paddingTop: 70,
    paddingLeft: 40,
    height: "60%",
  },
  bottom: {
    // borderWidth: 1,
    // flex: 3,
    width: "100%",
    backgroundColor: Colors.light.text,
    padding: 40,
    height: "40%",
  },
  image: {},
});
