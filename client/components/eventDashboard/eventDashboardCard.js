import { View, Text, Image } from "react-native";
import React from "react";

const EventDashboardCard = ({
  cardBackground,
  iconBackground,
  image,
  title,
  numberColor,
  registered,
  total,
  detail,
}) => {
  return (
    <View
      className="flex-row items-center w-full px-4 py-4 mb-4 rounded-2xl"
      style={{ backgroundColor: cardBackground }}
    >
      {/* Icon */}
      <View
        className="p-2 rounded-full"
        style={{ backgroundColor: iconBackground }}
      >
        <Image
          source={image}
          className="w-8 h-8"
          style={{ resizeMode: "contain" }}
        />
      </View>

      <View className="flex-row justify-between ml-4" style={{ flex: 1 }}>
        <View className="justify-between">
          <Text className="" style={{ fontFamily: "Inter-SemiBold" }}>
            {title}
          </Text>
          <View className="flex-row items-center mt-2 gap-x-1">
            <Text
              className="text-2xl"
              style={{ fontFamily: "Inter-SemiBold", color: numberColor }}
            >
              {registered}
            </Text>
            <Text
              style={{ fontFamily: "Inter-Medium" }}
              className="text-[#6D6D6D]"
            >
              /
            </Text>
            <Text
              style={{ fontFamily: "Inter-Medium" }}
              className="text-[#6D6D6D]"
            >
              {total}
            </Text>
            <Text
              style={{ fontFamily: "Inter-Medium" }}
              className="text-[#6D6D6D]"
            >
              invitees
            </Text>
          </View>
        </View>
        <View className="self-center justify-center px-3 py-1 bg-white rounded-xl">
          <Text className="" style={{ fontFamily: "Inter-SemiBold" }}>
            {detail}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventDashboardCard;
