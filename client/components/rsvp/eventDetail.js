import { View, Text, Image } from "react-native";
import React from "react";

const EventDetail = ({ title, name, location, date }) => {
  return (
    <View className="flex-row mt-8">
      <Image source={require("../../assets/rsvp/rsvp.png")} />
      <View className="ml-4" style={{ flex: 1 }}>
        <Text
          className="text-[#31013F] text-lg"
          style={{ fontFamily: "Manrope-Bold" }}
        >
          {title}
        </Text>
        <Text
          className="mt-1 text-[#690895]"
          style={{ fontFamily: "Manrope-SemiBold" }}
        >
          {name}
        </Text>
        <View className="flex-row items-center mt-1 gap-x-1">
          <Image source={require("../../assets/home/location.png")} />
          <Text className="text-[#6D6D6D]">{location}</Text>
        </View>
        <View className="flex-row items-center mt-1 gap-x-1">
          <Image source={require("../../assets/home/calendar.png")} />
          <Text className="text-[#6D6D6D]">{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default EventDetail;
