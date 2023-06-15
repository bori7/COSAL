import {
  Dimensions,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { View, Text } from "../../components/Themed";
import { SellerCategoryType } from "../../shared/types/slices";
import Colors from "../../constants/Colors";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("screen").width;
const CategoryContent = ({
  category,
}: {
  category: SellerCategoryType | null;
}) => {
  const [catToggle, setCatToggle] = useState<boolean>(false);
  const [hideToggle, setHideToggle] = useState<boolean>(true);
  const [allowToggle, setAllowToggle] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: screenWidth * 0.1 * 0.5,
            fontWeight: "500",
            flex: 1,
          }}
        >
          {category?.category}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setHideToggle(!hideToggle);
          }}
          style={{
            borderBottomColor: Colors.light.cogrey,
            borderBottomWidth: 1,
            flex: 2,
            bottom: 10,
          }}
        />
      </View>
      {hideToggle && (
        <>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                color: Colors.light.cogrey,
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Add at least 3 photo for this category
            </Text>
            <Text
              style={{
                color: Colors.light.cogrey,
                fontSize: 17,
                fontWeight: "300",
              }}
            >
              First Image will be the cover Image
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {[1, 2, 3].map((_, idx) => (
              <View
                key={idx.toString()}
                style={{
                  backgroundColor: Colors.light.greyCategory,
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SimpleLineIcons name="cloud-upload" size={25} color="black" />
              </View>
            ))}
            <View
              style={{
                backgroundColor: Colors.light.greyCategory,
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add-sharp" size={25} color="black" />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 15,
                color: Colors.light.cogrey,
                fontWeight: "300",
              }}
            >
              Supported formats are .Jpg, .gif, .png and .mp4, 10mb max{" "}
            </Text>
          </View>
          <View>
            <View style={{ marginVertical: 5 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Product Name"
                  placeholderTextColor={Colors.light.cogrey}
                  style={styles.input}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Product Brand"
                  placeholderTextColor={Colors.light.cogrey}
                  style={styles.input}
                />
              </View>
              <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => {
                  setCatToggle(!catToggle);
                }}
              >
                <Text
                  style={{
                    color: Colors.light.cogrey,
                    fontSize: 16,
                    fontWeight: "300",
                  }}
                >
                  Condition
                </Text>
                <SimpleLineIcons
                  name={`${catToggle ? "arrow-up" : "arrow-down"}`}
                  size={15}
                  color={Colors.light.cogrey}
                />
              </TouchableOpacity>
              {category?.extraInfo &&
                category?.extraInfo.map((info, idx) => (
                  <View key={idx.toString()} style={styles.inputContainer}>
                    <TextInput
                      placeholder={info}
                      placeholderTextColor={Colors.light.cogrey}
                      style={styles.input}
                    />
                  </View>
                ))}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Product Description"
                  placeholderTextColor={Colors.light.cogrey}
                  style={[styles.input, { height: 100 }]}
                  multiline={true}
                  numberOfLines={6}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Price"
                  placeholderTextColor={Colors.light.cogrey}
                  style={styles.input}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.light.greyCategory,
              marginTop: 10,
              padding: 8,
            }}
          >
            <Text style={{ color: Colors.light.cogrey }}>
              Note: Co-Selling helps you sell your products faster
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.light.cogrey,
                marginRight: 10,
                fontSize: 15,
              }}
            >
              Allow Co-selling
            </Text>
            <Switch
              trackColor={{ true: Colors.light.tick }}
              thumbColor={Colors.light.background}
              onValueChange={() => {
                setAllowToggle(!allowToggle);
              }}
              value={allowToggle}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CategoryContent;

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  input: {
    fontSize: 16,
    fontWeight: "300",
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
    marginTop: 25,
  },
});
