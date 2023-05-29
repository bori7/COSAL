import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Users() {
  return (
    <>
      <Stack.Screen options={{ title: "Overview" }} />
      <View style={styles.container}>
        <Text>I am a user</Text>
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
