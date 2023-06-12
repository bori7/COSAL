import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../../components/Themed";

const SellPage = () => {
  return (
    <View style={styles.container}>
      <Text>sellpage</Text>
    </View>
  );
};

export default SellPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
