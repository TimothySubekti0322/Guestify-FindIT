import { View, Text } from "react-native";
import React from "react";

const StatusChip = ({ status }) => {
  const color =
    status == "Belum Berlangsung"
      ? "#E9A400"
      : status == "Sedang Berlangsung"
      ? "#3EC04B"
      : "#ED4C4D";
  return (
    <View
      className={`border-[1px] self-start mt-4 rounded-lg px-2 py-1`}
      style={{ borderColor: color }}
    >
      <Text
        style={{
          fontSize: 11,
          fontFamily: "Manrope-SemiBold",
          color: color,
        }}
      >
        {status}
      </Text>
    </View>
  );
};

export default StatusChip;
