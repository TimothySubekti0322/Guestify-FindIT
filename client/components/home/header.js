import { View, Text, ImageBackground, Pressable } from "react-native";
import { Icon } from "react-native-paper";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchName = async () => {
      const userData = await AsyncStorage.getItem("userData");
      const name = JSON.parse(userData).name;
      setName(name);
    };
    fetchName();
  });
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
          {name}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
