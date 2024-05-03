import { View, Text } from "react-native";
import React from "react";

const borderRed = "border-[#ED4C4D]";
const backgroundRed = "bg-[#ED4C4D]";
const textRed = "text-[#ED4C4D]";

const borderOrange = "border-[#E9A400]";
const backgroundOrange = "bg-[#E9A400]";
const textOrange = "text-[#E9A400]";

const borderBlue = "border-[#4BBFF0]";
const backgroundBlue = "bg-[#4BBFF0]";
const textBlue = "text-[#4BBFF0]";

const RsvpTableChip = ({ value }) => {
  return (
    <View
      className={`${
        value == "declined"
          ? borderRed
          : (value == "waiting"
          ? borderOrange
          : borderBlue)
      } w-24 h-6 rounded-full border-[1px] px-2 flex-row items-center justify-center`}
    >
      <View
        className={`${
          value == "declined" ? backgroundRed : (value == "waiting" ? backgroundOrange : backgroundBlue)
        } rounded-full w-[6px] h-[6px] `}
      ></View>
      <Text
        className={`${
          value == "declined" ? textRed : (value == "waiting" ? textOrange : textBlue)
        } ml-2  font-semibold`}
        style={{ fontSize: 12 }}
      >
        {value[0].toUpperCase() + value.slice(1)}
      </Text>
    </View>
  );
};

export default RsvpTableChip;
