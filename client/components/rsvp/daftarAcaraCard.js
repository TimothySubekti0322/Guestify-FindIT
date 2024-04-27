import { View, Text, Image } from "react-native";
import React from "react";

const DaftarAcaraCard = ({ title, location, time, fileName }) => {
  return (
    <View className="bg-[#690895] p-3 rounded-2xl mt-4">
      <View className="flex-row items-center">
        {fileName == "pemberkatan-nikah" ? (
          <Image source={require("../../assets/rsvp/pemberkatan-nikah.png")} />
        ) : (
          <Image source={require("../../assets/rsvp/resepsi-pernikahan.png")} />
        )}
        <View className="ml-3" style={{ flex: 1 }}>
          <Text className="text-white" style={{ fontFamily: "Manrope-Bold" }}>
            {title}
          </Text>
          <View className="flex-row items-center mt-2 gap-x-1">
            <Image source={require("../../assets/rsvp/white-location.png")} />
            <Text
              className="text-xs text-white"
              style={{ fontFamily: "Manrope-Regular" }}
            >
              {location}
            </Text>
          </View>
          <View className="flex-row items-center mt-1 gap-x-1">
            <Image source={require("../../assets/rsvp/white-clock.png")} />
            <Text
              className="text-xs text-white"
              style={{ fontFamily: "Manrope-Regular" }}
            >
              {time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DaftarAcaraCard;
