import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";
import { Icon } from "react-native-paper";

const Header = ({ title }) => {
  return (
    <View className="relative flex-row items-center justify-center mb-12">
      <Pressable
        className="absolute left-0 bg-[#FFFFFF] rounded-xl p-1"
        onPress={() => router.back()}
      >
        <Icon source="chevron-left" size={32} />
      </Pressable>
      <Text
        className="text-[#31013F] text-2xl"
        style={{ fontFamily: "Inter-Bold" }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
