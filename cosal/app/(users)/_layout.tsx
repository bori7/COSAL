import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
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
        </Stack>
      </ThemeProvider>
    </>
  );
}
