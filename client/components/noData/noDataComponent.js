import { View, Text, Image } from "react-native";
import React from "react";

const NoDataComponent = () => {
  return (
    <View className="items-center px-8 mt-[20%]" style={{ flex: 1 }}>
      <Image source={require("../../assets/noData/no-data.png")} />
      <Text
        className="text-3xl text-[#690895]"
        style={{ fontFamily: "Manrope-Bold" }}
      >
        Tidak ada data :(
      </Text>
      <Text
        className="mt-4 text-center"
        style={{ fontFamily: "Manrope-Medium" }}
      >
        Kamu masih belum punya data disini, yuk tambahkan segera!
      </Text>
    </View>
  );
};

export default NoDataComponent;
