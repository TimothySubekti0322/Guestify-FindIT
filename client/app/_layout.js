import { Stack } from "expo-router";
import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const RootLayout = () => {
  let [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter/Inter-Black.otf"),
    "Inter-BlackItalic": require("../assets/fonts/Inter/Inter-BlackItalic.otf"),
    "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.otf"),
    "Inter-BoldItalic": require("../assets/fonts/Inter/Inter-BoldItalic.otf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter/Inter-ExtraBold.otf"),
    "Inter-ExtraBoldItalic": require("../assets/fonts/Inter/Inter-ExtraBoldItalic.otf"),
    "Inter-Light": require("../assets/fonts/Inter/Inter-Light.otf"),
    "Inter-LightItalic": require("../assets/fonts/Inter/Inter-LightItalic.otf"),
    "Inter-Medium": require("../assets/fonts/Inter/Inter-Medium.otf"),
    "Inter-MediumItalic": require("../assets/fonts/Inter/Inter-MediumItalic.otf"),
    "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.otf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.otf"),
    "Inter-SemiBoldItalic": require("../assets/fonts/Inter/Inter-SemiBoldItalic.otf"),
    "Inter-Thin": require("../assets/fonts/Inter/Inter-Thin.otf"),
    "Inter-ThinItalic": require("../assets/fonts/Inter/Inter-ThinItalic.otf"),
    "Manrope-Bold": require("../assets/fonts/Manrope/Manrope-Bold.otf"),
    "Manrope-Light": require("../assets/fonts/Manrope/Manrope-Light.otf"),
    "Manrope-Medium": require("../assets/fonts/Manrope/Manrope-Medium.otf"),
    "Manrope-Regular": require("../assets/fonts/Manrope/Manrope-Regular.otf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope/Manrope-Semibold.otf"),
    "Manrope-Thin": require("../assets/fonts/Manrope/Manrope-Thin.otf"),
    "Roca-Two-Black-Italic": require("../assets/fonts/Roca-Two/Roca-Two-Black-Italic.ttf"),
    "Roca-Two-Bold": require("../assets/fonts/Roca-Two/Roca-Two-Bold.otf"),
    "Roca-Two-Bold-Italic": require("../assets/fonts/Roca-Two/Roca-Two-Bold-Italic.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack />;
};

export default RootLayout;
