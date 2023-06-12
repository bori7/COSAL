import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../../components/Themed";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>seller index</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
