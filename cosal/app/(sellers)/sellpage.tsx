import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import { View, Text } from "../../components/Themed";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { CATEGORYLIST } from "../../constants/Objects";

const SellPage = () => {
  const router = useRouter();
  const [activeShop, setActiveShop] = useState<boolean>(false);
  const [catToggle, setCatToggle] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const [categoryList, setCategoryList] = useState(CATEGORYLIST);

  // useEffect(() => {
  //   console.log(categoryList);
  // }, [categoryList]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 4 }}>
        <TouchableOpacity
          style={{
            marginTop: 28,
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            router.back();
          }}
        >
          <SimpleLineIcons name="arrow-left" size={18} color="black" />
          <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: "500" }}>
            Back
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: "700", marginRight: 35 }}>
          Sell as an Individual or a Store
        </Text>
        <Text
          style={{ marginTop: 10, color: Colors.light.cogrey, fontSize: 17 }}
        >
          select your kind of shop
        </Text>
        <View
          style={{
            marginVertical: 25,
            marginHorizontal: 60,
            flexDirection: "row",
            // justifyContent: "space-around",
            width: "65%",
            backgroundColor: Colors.light.greyCategory,
            paddingVertical: 8,
            paddingHorizontal: 8,
          }}
        >
          <TouchableOpacity
            style={[
              {
                backgroundColor: !activeShop
                  ? Colors.light.background
                  : Colors.light.greyCategory,
                marginRight: 7,
              },
              styles.shop,
            ]}
            onPress={() => {
              setActiveShop(!activeShop);
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Individual
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              {
                backgroundColor: activeShop
                  ? Colors.light.background
                  : Colors.light.greyCategory,
              },
              styles.shop,
            ]}
            onPress={() => {
              setActiveShop(!activeShop);
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Store
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: Colors.light.cogrey,
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              Select your product categories
            </Text>
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => {
                setCatToggle(!catToggle);
              }}
            >
              <Text style={{ color: Colors.light.cogrey, fontSize: 16 }}>
                Categories
              </Text>
              <SimpleLineIcons
                name={`${catToggle ? "arrow-up" : "arrow-down"}`}
                size={15}
                color={Colors.light.cogrey}
              />
            </TouchableOpacity>
          </View>
          {catToggle && (
            <ScrollView
              style={styles.categories}
              showsVerticalScrollIndicator={false}
            >
              {categoryList?.map((item, index) => (
                <View key={index.toString()} style={styles.category}>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.category}
                  </Text>
                  <Switch
                    trackColor={{ true: Colors.light.tick }}
                    thumbColor={Colors.light.background}
                    style={{}}
                    onValueChange={() => {
                      // console.log(index, categoryList[index].ticked);
                      const newcategoryList = categoryList;
                      newcategoryList[index].ticked =
                        !newcategoryList[index].ticked;
                      // console.log(index, categoryList[index].ticked);
                      setCategoryList([...newcategoryList]);
                    }}
                    value={item.ticked}
                  />
                </View>
              ))}
            </ScrollView>
          )}
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: Colors.light.cogrey,
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              Confirm your email
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={Colors.light.cogrey}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: Colors.light.cogrey,
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              Contact number
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="number"
                placeholderTextColor={Colors.light.cogrey}
                style={styles.input}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Checkbox
              style={{
                marginRight: 5,
                borderColor: Colors.light.tabIconDefault,
                borderWidth: 1,
              }}
              // disabled
              value={checked}
              onValueChange={setChecked}
              color={checked ? Colors.light.tick : undefined}
            />
            <Text
              style={{
                color: checked ? Colors.light.text : Colors.light.cogrey,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Allow buyers contact you via number
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          marginHorizontal: 12,
          backgroundColor: Colors.light.text,
          bottom: 21,
        }}
        onPress={() => {
          router.push({
            pathname: "/(sellers)/sellpage",
          });
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: 17,
            marginRight: 20,
            color: Colors.light.background,
          }}
        >
          Continue
        </Text>

        <Feather name="arrow-right" size={24} color={Colors.light.background} />
      </TouchableOpacity>
    </View>
  );
};

export default SellPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  shop: {
    padding: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // borderWidth: 1,
  },
  input: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.light.text,
    width: "100%",
  },
  inputContainer: {
    borderWidth: 0.6,
    borderColor: Colors.light.cogrey,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.light.greyCategory,
  },
  categories: {
    marginVertical: 10,
    padding: 10,
    position: "absolute",
    width: "100%",
    top: 70,
    zIndex: 5,
    backgroundColor: Colors.light.background,
    height: "92%",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    paddingVertical: 15,
    marginBottom: 10,
    borderBottomColor: Colors.light.greyCategory,
    borderBottomWidth: 2,
  },
});
