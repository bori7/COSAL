import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../../components/Themed";

const CategoryPage = () => {
  return (
    <View style={styles.container}>
      <Text>categorypage</Text>
    </View>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
