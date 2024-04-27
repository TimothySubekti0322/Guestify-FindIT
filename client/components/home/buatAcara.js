import { Pressable, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { router } from "expo-router";

const BuatAcara = () => {
  return (
    <Pressable
      className="w-[48%]"
      onPress={() => router.push("./home/createEvent")}
    >
      <LinearGradient
        className="items-center justify-center py-3 px-2 border-[1px] border-[#EAA705] rounded-xl h-44"
        colors={["#FFFFFF", "#F9D264", "#f9d787"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.92, 1]}
      >
        <Image source={require("../../assets/home/event.png")} />
        <Text
          className="mt-4 text-center"
          style={{ fontFamily: "Manrope-Bold", fontSize: 14 }}
        >
          Buat Acara
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

export default BuatAcara;
