import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
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
          options={{ headerShown: false, title: "HOME" }}
        />
        <Stack.Screen
          name="homepage"
          options={{ headerShown: false, title: "TEST_HOME" }}
        />
        <Stack.Screen
          name="sellpage"
          options={{ headerShown: false, title: "PRODUCT" }}
        />
        <Stack.Screen
          name="categorypage"
          options={{ headerShown: false, title: "CATEGORY" }}
        />
      </Stack>
    </>
  );
}
