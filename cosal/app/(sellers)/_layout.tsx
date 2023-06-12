import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export const unstable_settings = {
  initialRouteName: "homepage",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
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
      </ThemeProvider>
    </>
  );
}
