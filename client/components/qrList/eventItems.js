import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";

const EventItems = ({ title, date, id, type, backgroundColor }) => {
  return (
    <View className="flex-row items-center justify-between w-full mb-4">
      <View
        className="bg-[#F5EDFF] rounded-xl items-center p-4"
        style={{ backgroundColor: backgroundColor }}
      >
        {type == "marriage" && (
          <Image source={require("../../assets/qrList/marriage.png")} />
        )}
        {type == "birthday" && (
          <Image source={require("../../assets/qrList/birthday-cake.png")} />
        )}
        {type == "wedding" && (
          <Image source={require("../../assets/qrList/wedding-cake.png")} />
        )}
        {type == "lunch" && (
          <Image source={require("../../assets/qrList/lunch-time.png")} />
        )}
      </View>
      <View className="justify-between">
        <Text className="text-lg" style={{ fontFamily: "Manrope-Bold" }}>
          {title}
        </Text>
        <View className="mt-6">
          <Text className="text-[#6D6D6D]" style={{ fontSize: 12 }}>
            Tanggal
          </Text>
          <Text
            className="mt-2"
            style={{ fontFamily: "Manrope-SemiBold", fontSize: 12 }}
          >
            {date}
          </Text>
        </View>
      </View>
      <View className="overflow-hidden rounded-full bg-[#E9A400]">
        <Pressable
          className="px-3 py-2"
          android_ripple={{ color: "#C78200" }}
          onPress={() => router.push(`./qr/${id}`)}
        >
          <Text className="text-white">Lihat QR Code</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EventItems;
