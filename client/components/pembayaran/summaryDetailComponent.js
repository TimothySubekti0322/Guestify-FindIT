import { View, Text } from "react-native";
import React from "react";

const SummaryDetailComponent = ({ name, value }) => {
  return (
    <View className="flex-row justify-between w-full mt-3">
      <Text
        className="text-[#7F7F7F]"
        style={{ fontFamily: "Inter-SemiBold", fontSize: 12 }}
      >
        {name}
      </Text>
      <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 12 }}>
        {value}
      </Text>
    </View>
  );
};

export default SummaryDetailComponent;
