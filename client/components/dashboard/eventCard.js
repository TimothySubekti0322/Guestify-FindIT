import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import StatusChip from "./statusChip";
import { formatDateMonthYear } from "../../utils/dateFormater";
import { router } from "expo-router";

const EventCard = ({ image, title, owner, location, date, idEvent }) => {
  const now = new Date();
  const eventDate = new Date(date);
  const status =
    eventDate.getDate() > now.getDate()
      ? "Belum Berlangsung"
      : eventDate.getDate() < now.getDate()
      ? "Sudah Berlangsung"
      : "Sedang Berlangsung";
  return (
    <Pressable
      className="flex-row mb-8 border-[1px] border-[#6D6D6D] rounded-2xl p-4"
      onPress={() =>
        router.push({
          pathname: "./layout",
          params: { screen: "eventDashboard", idEvent: idEvent },
        })
      }
    >
      <Image source={image} style={{ height: "auto" }} className="rounded-xl" />
      <View className="ml-3" style={{ flex: 1 }}>
        <Text
          className="text-[#31013F] text"
          style={{ fontFamily: "Manrope-Bold", fontSize: 16 }}
        >
          {title}
        </Text>
        <Text
          className="mt-1 text-[#690895]"
          style={{ fontFamily: "Manrope-Bold" }}
        >
          {owner}
        </Text>
        <View className="flex-row items-center mt-4 gap-x-1">
          <Image source={require("../../assets/dashboard/location.png")} />
          <Text className="text-[#6D6D6D]" style={{ fontSize: 12 }}>
            {location}
          </Text>
        </View>
        <View className="flex-row items-center mt-2 gap-x-1">
          <Image source={require("../../assets/dashboard/calendar.png")} />
          <Text className="text-[#6D6D6D]" style={{ fontSize: 12 }}>
            {formatDateMonthYear(date)}
          </Text>
        </View>
        <StatusChip status={status} />
      </View>
    </Pressable>
  );
};

export default EventCard;
