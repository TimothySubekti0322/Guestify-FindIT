import { View, Text, Image } from "react-native";
import { Icon } from "react-native-paper";
import React from "react";

const TestimonialCard = () => {
  return (
    <View className="flex-row w-full p-2 mt-3 bg-white rounded-2xl">
      <Image source={require("../../assets/home/testimonial.png")} />
      <View className="ml-2" style={{ flex: 1 }}>
        <Text
          className="text-[#690895] text-[14px]"
          style={{ fontFamily: "Inter-Bold" }}
        >
          Pernikahan Michael & Rachel
        </Text>
        <View className="flex-row items-center mt-1">
          <Icon source="calendar-blank" color="#6D6D6D" />
          <Text className="text-[12px] text-[#6D6D6D] ml-1">
            February 11, 2023
          </Text>
          <Image
            source={require("../../assets/home/location.png")}
            className="ml-2"
          />
          <Text className="text-[12px] text-[#6D6D6D] ml-1">
            Jakarta, Indonesia
          </Text>
        </View>
        <Text
          className="text-[10px] flex-wrap mt-2"
          style={{ fontFamily: "Inter-Regular" }}
        >
          “Guestify sangat membantu kami dengan seluruh proses persiapan acara
          karena kami jadi lebih bisa mengontrol jumlah tamu yang akan datang.”
        </Text>
        <Text
          className="text-[10px] flex-wrap"
          style={{ fontFamily: "Inter-Regular" }}
        >
          -- Michael & Rachel
        </Text>
      </View>
    </View>
  );
};

export default TestimonialCard;
