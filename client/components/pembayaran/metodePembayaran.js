import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const MetodePembayaran = ({
  title,
  value,
  metodePembayaran,
  setMetodePembayaran,
  image,
}) => {
  return (
    <Pressable className="bg-white border-[1px] border-[#7D7D7D] rounded-xl flex-row items-center justify-between pl-4 pr-2 mt-4" onPress={() => setMetodePembayaran(value)}>
      <View className="flex-row items-center gap-x-2">
        <Image
          source={image}
          style={{ resizeMode: "contain" }}
          className="w-12"
        />
        <Text>{title}</Text>
      </View>

      <RadioButton
        value={value}
        status={metodePembayaran === value ? "checked" : "unchecked"}
        onPress={() => setMetodePembayaran(value)}
        color="#E9A400"
        uncheckedColor="#E9A400"
      />
    </Pressable>
  );
};

export default MetodePembayaran;
