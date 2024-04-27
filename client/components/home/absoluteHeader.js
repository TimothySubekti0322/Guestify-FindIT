import { View, Text } from "react-native";
import React from "react";

const AbsoluteHeader = () => {
  return (
    <View className="absolute flex-row items-center self-center justify-center h-16 px-6 bg-white rounded-xl z-1 -top-8">
      <Text className="text-[#6D6D6D]">Transformasikan acaramu dengan</Text>
      <Text
        className="text-[#E9A400] ml-1 text-xl mt-1"
        style={{ fontFamily: "Roca-Two-Bold" }}
      >
        Guestify.
      </Text>
    </View>
  );
};

export default AbsoluteHeader;
