import { View, Text } from "react-native";
import React from "react";

const GuestTableChip = ({ value }) => {
  return (
    <View
      className={`${
        value ? "border-[#3EC04B]" : "border-[#E94B4C]"
      } w-14 h-6 rounded-full border-[1px] px-2 flex-row items-center justify-center`}
    >
      <View
        className={`${
          value ? "bg-[#3EC04B]" : "bg-[#E94B4C]"
        } rounded-full w-[6px] h-[6px] `}
      ></View>
      <Text
        className={`${
          value ? "text-[#3EC04B]" : "text-[#E94B4C]"
        } ml-2  font-semibold`}
        style={{ fontSize: 12 }}
      >
        {value ? "Yes" : "No"}
      </Text>
    </View>
  );
};

export default GuestTableChip;
