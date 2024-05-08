import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const Menu = ({ text, icon, rightText, pressHandler }) => {
  return (
    <Pressable
      className="flex-row items-center justify-between p-2 mt-3"
      android_ripple={{ color: "#CCCCCC" }}
      onPress={() => pressHandler()}
    >
      <View className="flex-row items-center">
        <Image
          source={icon}
          style={{ resizeMode: "contain" }}
          className="w-8"
        />
        <Text className="ml-4" style={{ fontSize: 15 }}>
          {text}
        </Text>
      </View>
      <View className="flex-row items-center">
        <Text className="mr-2">{rightText}</Text>
        <Icon source={"chevron-right"} size={30} className="" />
      </View>
    </Pressable>
  );
};

export default Menu;
