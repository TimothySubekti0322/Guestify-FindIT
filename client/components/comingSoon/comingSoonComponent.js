import { View, Text, Image } from "react-native";
import React from "react";
import Button from "../button/button";

const ComingSoonComponent = ({ title, pressHandler }) => {
  return (
    <View className="items-center px-8 mt-[25%]" style={{ flex: 1 }}>
      <Image source={require("../../assets/comingSoon/coming-soon.png")} />
      <Text
        className="text-3xl text-[#690895]"
        style={{ fontFamily: "Manrope-Bold" }}
      >
        Coming Soon...
      </Text>
      <Text
        className="mt-2 text-center"
        style={{ fontFamily: "Manrope-Medium" }}
      >
        Kami masih dalam proses untuk mengembangkan bagian ini, ditunggu ya!
      </Text>
      <View className="absolute w-full bottom-6">
        <Button title={title} handlePress={pressHandler} />
      </View>
    </View>
  );
};

export default ComingSoonComponent;
