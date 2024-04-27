import { View, Text, ImageBackground, Pressable } from "react-native";
import { Icon } from "react-native-paper";
import React from "react";

const Header = () => {
  return (
    <ImageBackground
      source={require("../../assets/home/header-background.png")}
      resizeMode="contain"
      style={{
        width: "100%",
        height: 288,
      }}
    >
      <View className="w-full px-8 pt-16">
        <View className="flex-row items-center justify-between w-full">
          <Pressable>
            <Icon source="menu" size={32} color="white" />
          </Pressable>
          <Pressable className="p-2 bg-white rounded-lg">
            <Icon source="cart-outline" size={24} color="#989899" />
          </Pressable>
        </View>
        <Text
          className="mt-8 text-3xl text-white"
          style={{ fontFamily: "Inter-SemiBold" }}
        >
          Selamat Datang,
        </Text>
        <Text
          className="text-3xl text-white"
          style={{ fontFamily: "Inter-SemiBold" }}
        >
          Bobby!
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
