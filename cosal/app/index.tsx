import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Users() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack.Screen options={{ title: "COSAL" }} />
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>COSAL</Text>
        <Link href="/(users)/homepage" asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
            onPress={() => {}}
          >
            <FontAwesome
              name="caret-right"
              size={50}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15 }}
            />
            <Text style={{ fontSize: 30 }}>USERS</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(sellers)/homepage" asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
            onPress={() => {}}
          >
            <FontAwesome
              name="caret-right"
              size={50}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15 }}
            />
            <Text style={{ fontSize: 30 }}>SELLERS</Text>
          </TouchableOpacity>
        </Link>
        {/* <Link href="/(users)" asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
            onPress={() => {}}
          >
            <FontAwesome
              name="caret-right"
              size={50}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15 }}
            />
            <Text style={{ fontSize: 30 }}>HOMEPAGE_USERS</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(sellers)" asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
            onPress={() => {}}
          >
            <FontAwesome
              name="caret-right"
              size={50}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15 }}
            />
            <Text style={{ fontSize: 30 }}>HOMEPAGE_SELLERS</Text>
          </TouchableOpacity>
        </Link> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
