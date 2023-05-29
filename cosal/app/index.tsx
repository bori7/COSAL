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
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome
              name="caret-right"
              size={50}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
