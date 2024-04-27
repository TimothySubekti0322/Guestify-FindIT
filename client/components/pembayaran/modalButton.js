import { View, Text, Pressable } from "react-native";
import React from "react";

const ModalButton = ({ title, handlePress }) => {
  return (
    <View
      className="bg-[#EFB526] rounded-full mt-5 overflow-hidden"
      style={{ elevation: 2 }}
    >
      <Pressable
        android_ripple={{ color: "#CD9304" }}
        className="px-6 py-3"
        onPress={() => handlePress()}
      >
        <Text
          className="text-center text-white text"
          style={{ fontFamily: "Manrope-Bold" }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default ModalButton;
