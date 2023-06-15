import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { View, Text } from "../../components/Themed";
import { useRouter } from "expo-router";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Colors from "../../constants/Colors";
import { removeCategory } from "../../store/slices/seller";
import CategoryContent from "../../components/sellers/CategoryContent";

const screenWidth = Dimensions.get("screen").width;
const CategoryPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { sellerCategories } = useSelector((state: RootState) => state.seller);

  // useEffect(() => {
  //   console.log("SellerCategories:::", sellerCategories);
  // }, [sellerCategories]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: screenWidth * 0.1 * 0.7,
              fontWeight: "700",
              marginRight: 35,
            }}
          >
            Complete your selected categories
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: Colors.light.tabIconDefault,
              fontSize: 15,
            }}
          >
            upload items for each category selected
          </Text>
          <View
            style={{
              marginVertical: 25,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {sellerCategories?.map((item, index) => (
              <View
                key={index.toString()}
                style={{
                  backgroundColor: Colors.light.greyCategory,
                  paddingTop: 4,
                  paddingBottom: 8,
                }}
              >
                <View style={styles.cat}>
                  <Text
                    style={{
                      color: Colors.light.background,
                      fontSize: 16,
                      fontWeight: "600",
                      marginRight: 10,
                    }}
                  >
                    {item?.category}
                  </Text>

                  <AntDesign
                    name="closecircle"
                    size={16}
                    color="white"
                    onPress={() => {
                      dispatch(removeCategory(index));
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
          <ScrollView
            style={{
              marginBottom: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            {sellerCategories &&
              sellerCategories?.length > 0 &&
              sellerCategories.map((item, idx) => (
                <CategoryContent key={idx.toString()} category={item} />
              ))}
          </ScrollView>
          <View
            style={{
              marginVertical: 20,

              borderBottomColor: Colors.light.cogrey,
              borderBottomWidth: 1,
            }}
          />
          <View style={{ marginTop: 15 }}>
            <View>
              <Text
                style={{
                  color: Colors.light.text,
                  fontSize: 25,
                  fontWeight: "700",
                  marginVertical: 8,
                }}
              >
                Promote your Products
              </Text>
              <Text
                style={{
                  color: Colors.light.cogrey,
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Please, choose one of the following plans to post your products
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 25,
                backgroundColor: Colors.light.greyCategory,
                marginTop: 30,
                marginBottom: 15,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: Colors.light.text,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Free Plan
              </Text>
              <Text
                style={{
                  color: Colors.light.cogrey,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                Free
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                backgroundColor: Colors.light.background,
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
                borderWidth: 1,
                borderColor: Colors.light.cogrey,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.light.text,
                    fontSize: screenWidth * 0.1 * 0.4,
                    fontWeight: "500",
                    marginRight: 15,
                  }}
                >
                  Trend Plan
                </Text>
                <View
                  style={{ backgroundColor: Colors.light.text, padding: 8 }}
                >
                  <Text
                    style={{
                      color: Colors.light.background,
                      fontSize: screenWidth * 0.1 * 0.35,
                      fontWeight: "500",
                    }}
                  >
                    1 week
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: Colors.light.cogrey,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                £10
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                backgroundColor: Colors.light.background,
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
                borderWidth: 1,
                borderColor: Colors.light.cogrey,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: Colors.light.text,
                    fontSize: screenWidth * 0.1 * 0.4,
                    fontWeight: "500",
                    marginRight: 7,
                  }}
                >
                  Premium Trend
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.light.text,
                    padding: 5,
                    marginRight: 7,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.light.background,
                      fontSize: screenWidth * 0.1 * 0.35,
                      fontWeight: "500",
                    }}
                  >
                    1 Month
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: Colors.light.background,
                    padding: 5,
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.light.text,
                      fontSize: screenWidth * 0.1 * 0.33,
                      fontWeight: "500",
                    }}
                  >
                    3 Months
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: Colors.light.cogrey,
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                £20
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.light.text,
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                marginBottom: 20,
                marginTop: 26,
              }}
            >
              <Text
                style={{
                  color: Colors.light.background,
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Publish Products
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
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
  cat: {
    backgroundColor: Colors.light.text,
    marginRight: 7,
    marginLeft: 7,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
  },
});
