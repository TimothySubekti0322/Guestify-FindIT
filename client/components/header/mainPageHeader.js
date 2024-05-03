import { View, Text, ImageBackground, Dimensions } from "react-native";
import React from "react";

const MainPageHeader = ({ title }) => {
  const widht = Dimensions.get("window").width;
  return (
    <ImageBackground
      source={require("../../assets/event/header-background.png")}
      resizeMode="contain"
      style={{
        width: widht,
        height: 160,
      }}
    >
      <View className="items-center justify-center w-full h-full">
        <Text
          className="text-2xl text-white"
          style={{ fontFamily: "Inter-SemiBold" }}
        >
          {title}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default MainPageHeader;
