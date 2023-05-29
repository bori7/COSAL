import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Users() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack.Screen options={{ title: "HOME" }} />
      <View style={styles.container}>
        <Text>I am home</Text>
        <Link href="/(users)/homepage" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme ?? "light"].text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
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
