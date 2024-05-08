import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-paper";
import ProfileImage from "../../static/image/icon";
import Menu from "./menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const MainComponent = ({ setScreen, name }) => {
  const handleLogOut = () => {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userData");
    AsyncStorage.removeItem("rememberMe");
    router.replace("/login");
  };
  return (
    <>
      <ImageBackground
        source={require("../../assets/event/header-background.png")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 160,
        }}
      >
        <View className="items-center justify-center w-full h-full">
          <Text
            className="text-2xl text-white"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Profile
          </Text>
        </View>
      </ImageBackground>
      {/* Content */}
      <View
        className="bg-[#F7F7F7] relative pt-28 pb-12 px-6"
        style={{ flex: 1 }}
      >
        <View className="absolute items-center self-center justify-center rounded-xl z-1 -top-12">
          <Image
            source={require("../../assets/profile/avatar.png")}
            style={{ resizeMode: "contain" }}
          />
          <Text
            className="mt-4 text-xl"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            {name}
          </Text>
        </View>

        {/* Menu */}
        <Menu
          text="Edit Profile"
          icon={ProfileImage.user}
          rightText=""
          pressHandler={() => setScreen("edit")}
        />
        <Menu
          text="Bahasa"
          icon={ProfileImage.bahasa}
          rightText="Bahasa Indonesia"
          pressHandler={() => setScreen("comingSoon")}
        />
        <Menu
          text="Keamanan"
          icon={ProfileImage.keamanan}
          rightText=""
          pressHandler={() => setScreen("comingSoon")}
        />
        <Menu
          text="Pengaturan"
          icon={ProfileImage.pengaturan}
          rightText=""
          pressHandler={() => setScreen("comingSoon")}
        />
        <Menu
          text="Bantuan"
          icon={ProfileImage.bantuan}
          rightText=""
          pressHandler={() => setScreen("comingSoon")}
        />
      </View>
      <View className="px-8 pb-8 bg-[#F7F7F7]">
        <Pressable
          className="flex-row items-center self-start px-3 py-2 my-8"
          android_ripple={{ color: "#CCCCCC" }}
          onPress={() => handleLogOut()}
        >
          <Icon source={ProfileImage.logout} size={30} className="" />
          <Text className="text-[#FF0000] ml-2">Keluar</Text>
        </Pressable>
      </View>
    </>
  );
};

export default MainComponent;
