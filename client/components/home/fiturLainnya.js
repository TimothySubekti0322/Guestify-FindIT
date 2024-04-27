import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

const FiturLainnya = ({ backgroundColor, assets, title, setPage }) => {
  return (
    <View className="items-center mt-4">
      <Pressable
        className={`p-6 rounded-full`}
        style={{ backgroundColor: backgroundColor }}
        onPress={() => setPage("event")}
      >
        {assets === "rsvp" && (
          <Image
            source={require("../../assets/home/rsvp.png")}
            className="w-7 h-7"
          />
        )}
        {assets === "book" && (
          <Image
            source={require("../../assets/home/book.png")}
            className="w-7 h-7"
          />
        )}
        {assets === "barcode" && (
          <Image
            source={require("../../assets/home/barcode.png")}
            className="w-7 h-7"
          />
        )}
      </Pressable>
      <Text className="mt-2" style={{ fontFamily: "Inter-SemiBold" }}>
        {title}
      </Text>
    </View>
  );
};

export default FiturLainnya;
