import { Pressable, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { router } from "expo-router";

const DaftarQR = () => {
  return (
    <Pressable
      className="w-[48%]"
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={() => router.push("../home/qrList")}
    >
      <LinearGradient
        className="items-center justify-center py-3 px-2 border-[1px] border-[#BB7EB1] rounded-xl h-44"
        colors={["#FFFFFF", "#F0D0EE", "#BA7DB0"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.5, 1]}
      >
        <Image source={require("../../assets/home/qr-code.png")} />
        <Text
          className="mt-4 text-center"
          style={{ fontFamily: "Manrope-Bold", fontSize: 14 }}
        >
          Daftar QR Code
        </Text>
        <Text
          className="text-[#6D6D6D] text-center mt-2"
          style={{ fontSize: 12 }}
        >
          Ikuti acara favoritmu hanya melalui scan QR Code!
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default DaftarQR;
