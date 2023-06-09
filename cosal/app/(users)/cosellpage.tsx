import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text } from "../../components/Themed";
import {
  useLocalSearchParams,
  useRouter,
} from "../../shared/custom-expo-router";
import { LabelType, PRODUCTS } from "../../constants/Objects";
import CartIcon from "../../components/users/CartIcon";
import LabelDetails from "../../components/users/LabelDetails";
import ProductHeaderInfo from "../../components/users/ProductHeaderInfo";
import { ProgressBarButton } from "../../components/ProgressBarButton";

export default function CosellPage() {
  const cWidth = 30;
  const router = useRouter();

  const { productId } = useLocalSearchParams<"cosellpage">();

  const [cosellPercent2, setCosellPercent2] = useState(0); //5-97.5
  const product = PRODUCTS[productId];
  const [boxes, setBoxes] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [labels, setLabels] = useState<LabelType[]>([
    { label: "Product Price", value: "\u00A3" + 1000 },
    { label: "Profit", value: "\u00A3" + 100 },
  ]);

  const handleSetCosellPercent = (val: number) => {
    setCosellPercent2(val);
  };

  useEffect(() => {
    // console.log("cosellPercent2:", cosellPercent2);
  }, [cosellPercent2]);
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

          <View style={{ marginVertical: 5 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 5,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    paddingRight: 5,

                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Cosell
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.light.greyCategory,
              padding: 5,
              marginLeft: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.light.cogrey, fontSize: 13 }}>
              Note: Maximum 20% of the Products price can be gained
            </Text>
          </View>

          <View
            style={{
              marginTop: 30,
              marginBottom: 45,
              //   borderWidth: 1,
              //   alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.light.tabIconDefault,
                borderRadius: 5,
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.light.bar,
                  height: 6,
                  borderRadius: 5,
                  width: `${cosellPercent2}%`,
                }}
              ></View>
            </View>
            <ProgressBarButton
              buttonStyle={{
                borderWidth: 2,
                borderColor: Colors.light.bar,
                backgroundColor: Colors.light.background,
                position: "absolute",
              }}
              cWidth={cWidth}
              pad={0}
              setExternalProgress={handleSetCosellPercent}
            />
          </View>

          <LabelDetails labels={labels} />
          <View style={{ marginVertical: 30, paddingLeft: 20 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                color: Colors.light.cogrey,
              }}
            >
              Total Price: {`${"\u00A3" + 1100}`}
            </Text>
          </View>
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
            Total Price
          </Text>
          <Text
            style={{
              fontSize: 21,
              color: Colors.light.price,
              fontWeight: "bold",
            }}
          >
            {`${"\u00A3" + 1100}`}
          </Text>
        </View>
        <View
          style={{
            width: "35%",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: "black",
            alignItems: "center",
          }}
        >
          <Feather name="link-2" size={24} color={"white"} />
          <Text style={{ fontWeight: "500", color: "white" }}>Cosell</Text>

          <SimpleLineIcons name="arrow-down" size={15} color={"white"} />
        </View>
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            height: 50,
            width: "35%",
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
    marginBottom: 30,
    padding: 10,
  },
});
