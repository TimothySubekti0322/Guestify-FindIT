import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import React from "react";
import { encode } from "base-64";

const EventItems = ({ title, date, id, type, backgroundColor, qrCodeUrl }) => {
  return (
    <View className="flex-row items-stretch justify-between w-full mb-8">
      <View
        className="bg-[#F5EDFF] rounded-xl items-center justify-center p-4"
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
      <View className="justify-between ml-4 mr-2" style={{ flex: 1 }}>
        <Text className="" style={{ fontFamily: "Manrope-Bold", fontSize: 14 }}>
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
      <View className="overflow-hidden rounded-full bg-[#E9A400] self-center">
        <Pressable
          className="items-center justify-center w-24 h-10"
          android_ripple={{ color: "#C78200" }}
          onPress={() =>
            router.push({
              pathname: `./qr/${id}`,
              params: { qrCodeUrl: encode(qrCodeUrl) },
            })
          }
        >
          <Text className="text-white" style={{ fontSize: 12 }}>
            Lihat QR Code
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EventItems;
