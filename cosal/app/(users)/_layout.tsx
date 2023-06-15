import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "homepage",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}
function RootLayoutNav() {
  return (
    <>
      <Stack initialRouteName="homepage">
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "USERS" }}
        />
        <Stack.Screen
          name="homepage"
          options={{ headerShown: false, title: "Products" }}
        />
        <Stack.Screen
          name="productpage"
          options={{ headerShown: false, title: "Product" }}
        />
        <Stack.Screen
          name="cosellpage"
          options={{ headerShown: false, title: "Cosell" }}
        />
      </Stack>
    </>
  );
}
