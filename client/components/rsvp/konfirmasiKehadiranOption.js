import { View, Text, Pressable } from "react-native";
import React from "react";

const KonfirmasiKehadiranOption = ({ handleChange, kehadiran, name }) => {
  return (
    <>
      <Text className="text-[#690895]" style={{ fontFamily: "Manrope-Bold" }}>
        Konfirmasi Kehadiran
      </Text>
      <View className="flex-row justify-between w-full mt-2 mb-4">
        <Pressable
          className={`${
            kehadiran ? "bg-[#BA7DB0]" : "bg-[#F1F1F1]"
          } w-[47%] items-center rounded-full py-3`}
          onPress={() => handleChange(name, true)}
        >
          <Text
            className={`${kehadiran ? "text-white" : "text-[#6D6D6D]"}`}
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Sampai Ketemu!
          </Text>
        </Pressable>
        <Pressable
          className={`${
            !kehadiran ? "bg-[#BA7DB0]" : "bg-[#F1F1F1]"
          } w-[47%] items-center rounded-full py-3`}
          onPress={() => handleChange("kehadiran", false)}
        >
          <Text
            className={`${!kehadiran ? "text-white" : "text-[#6D6D6D]"}`}
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Ada Halangan :(
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default KonfirmasiKehadiranOption;
