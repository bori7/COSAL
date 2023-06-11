import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LABELS, LabelType, PRODUCTS } from "../../constants/Objects";
import {
  AntDesign,
  Entypo,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import CartIcon from "../../components/users/CartIcon";
import { useLocalSearchParams } from "../../shared/custom-expo-router";
import { View, Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import ProductCard from "../../components/users/ProductCard";
import ProductHeaderInfo from "../../components/users/ProductHeaderInfo";
import LabelDetails from "../../components/users/LabelDetails";
import { DetailModal } from "../../components/DetailModal";

export default function ProductPage() {
  const { productId } = useLocalSearchParams<"productpage">();

  const product = PRODUCTS[productId];
  const [boxes, setBoxes] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [labels, setLabels] = useState<LabelType[]>(LABELS);
  const [details, setDetails] = useState<number>(1);
  const [cosellToggle, setCosellToggle] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (productId) {
      // console.log(productId);
      // console.log(product);
    }
    return () => {
      setCosellToggle(false);
    };
  }, [productId]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 280 }}>
        {productId && (
          <ImageBackground
            source={PRODUCTS[productId].uri}
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
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        {boxes.map((box, index) => (
          <View
            key={index.toString()}
            style={{
              height: 60,
              width: 60,
              backgroundColor: Colors.light.tabIconDefault,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>{box}</Text>
          </View>
        ))}
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              paddingRight: 5,
              color: Colors.light.cogrey,
            }}
          >
            Computers
          </Text>
          <Text
            style={{
              paddingHorizontal: 8,
              paddingVertical: 3,
              backgroundColor: Colors.light.orangeLight,
              color: Colors.light.orange,
            }}
          >
            Vendors Name
          </Text>
        </View>
      </View>
      <View style={{ padding: 15, flex: 1, paddingBottom: 40 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: -60 }}
        >
          <ProductHeaderInfo product={product} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                height: 50,
                width: "15%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="shop" size={24} color="black" />
            </View>

            <TouchableOpacity
              style={{
                width: "40%",
                justifyContent: "space-evenly",
                flexDirection: "row",
                backgroundColor: "black",
                alignItems: "center",
              }}
              onPress={() => {
                router.push({
                  pathname: "/(users)/cosellpage",
                  params: { productId: productId },
                });
              }}
            >
              <Feather name="link-2" size={24} color={"white"} />
              <Text style={{ fontWeight: "500", color: "white" }}>Cosell</Text>

              <TouchableOpacity
                onPress={() => {
                  setCosellToggle(!cosellToggle);
                }}
                style={{
                  // borderWidth: 1,
                  // borderColor: "white",
                  height: "50%",
                  paddingVertical: 5,
                  alignItems: "center",
                }}
              >
                <SimpleLineIcons
                  name={`${cosellToggle ? "arrow-down" : "arrow-up"}`}
                  size={15}
                  color={"white"}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {cosellToggle && (
              <DetailModal
                xstyle={{
                  top: -85,
                  left: 140,
                  transform: [{ rotate: "180deg" }],
                }}
                bstyle={{
                  borderRadius: 0,
                  height: 70,
                  width: 110,
                }}
                children={
                  <View
                    style={{
                      backgroundColor: Colors.light.transparent,
                      transform: [{ rotate: "180deg" }],
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.light.background,
                        marginVertical: 3,
                        fontWeight: "500",
                      }}
                    >
                      Copy link
                    </Text>
                    <Text
                      style={{
                        color: Colors.light.background,
                        marginVertical: 5,
                        fontWeight: "500",
                      }}
                    >
                      Add to shop
                    </Text>
                  </View>
                }
              />
            )}
            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                height: 50,
                width: "40%",
                justifyContent: "space-evenly",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <SimpleLineIcons name="basket" size={20} />
              <Text style={{ fontWeight: "500" }}>Add to Cart</Text>
            </View>
          </View>
          <View style={{ marginVertical: 5 }}>
            <View
              style={{
                flexDirection: "row",
                // alignItems: "center",
                marginBottom: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setDetails(1);
                }}
              >
                <View
                  style={{
                    borderBottomWidth: 3,
                    borderBottomColor:
                      details == 1
                        ? Colors.light.text
                        : Colors.light.transparent,
                    paddingBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      paddingRight: 5,
                      color:
                        details == 1 ? Colors.light.text : Colors.light.cogrey,
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    About Product
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDetails(2);
                }}
              >
                <View
                  style={{
                    borderBottomWidth: 3,
                    borderBottomColor:
                      details == 1
                        ? Colors.light.transparent
                        : Colors.light.text,
                    paddingBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 12,
                      color:
                        details == 2 ? Colors.light.text : Colors.light.cogrey,
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Reviews
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <LabelDetails labels={labels} />
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Similar Products
            </Text>
            <Text style={{ color: Colors.light.cogrey }}>
              you might like products from the same vendor
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Other Products from Vendor
            </Text>
            <TouchableOpacity>
              <Text style={{ color: Colors.light.price, marginRight: 10 }}>
                see more
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.categoriesStyle}
            contentContainerStyle={styles.categoriesContentStyle}
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <View key={`#${index}`} style={styles.otherProduct}>
                <ProductCard item={PRODUCTS[productId]} index={productId} />
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            borderColor: "black",
            height: 50,
            width: "25%",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              color: Colors.light.cogrey,
              fontWeight: "300",
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontSize: 21,
              color: Colors.light.price,
              fontWeight: "bold",
            }}
          >
            {product?.price}
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: "black",
            alignItems: "center",
          }}
        >
          <Feather name="shopping-bag" size={24} color={"white"} />
          <Text style={{ fontWeight: "500", color: "white" }}>Buy Now</Text>
        </View>
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            height: 50,
            width: "40%",
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SimpleLineIcons name="basket" size={20} />
          <Text style={{ fontWeight: "500" }}>Add to Cart</Text>
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
  otherProduct: {
    width: 200,
    marginRight: 10,
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
  categoriesStyle: {
    // borderWidth: 1,
    paddingBottom: 40,
  },
  categoriesContentStyle: {
    // borderWidth: 1,
    marginVertical: 10,
  },
  footer: {
    // borderWidth: 1,
    shadowColor: Colors.light.tabIconDefault,
    shadowOffset: {
      width: 5,
      height: -10,
    },
    elevation: 9,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 30,
    padding: 10,
  },
});
