import { View, Pressable, Text } from "react-native";
import React from "react";

const KonfirmasiRsvpButton = ({ handleSubmit }) => {
  return (
    <View
      className="bg-[#E9A400] rounded-full w-full my-8 overflow-hidden"
      style={{ elevation: 2 }}
    >
      <Pressable
        android_ripple={{ color: "#C78200" }}
        className="p-4"
        onPress={() => handleSubmit()}
      >
        <Text
          className="text-lg text-center text-white"
          style={{ fontFamily: "Manrope-Bold" }}
        >
          Konfirmasi RSVP
        </Text>
      </Pressable>
    </View>
  );
};

export default KonfirmasiRsvpButton;
