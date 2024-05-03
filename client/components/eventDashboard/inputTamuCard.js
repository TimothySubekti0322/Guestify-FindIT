import { View, Text, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const InputTamuCard = ({ number, title, text, icon, buttonText }) => {
  return (
    <View className="bg-white rounded-2xl border-[1px] border-[#6D6D6D] p-4 flex-row">
      <View className="h-10 w-10 bg-[#690895] self-start rounded-full items-center justify-center">
        <Text className="text-white" style={{ fontFamily: "Inter-SemiBold" }}>
          {number}
        </Text>
      </View>
      <View className="ml-2" style={{ flex: 1 }}>
        <View className="mt-2">
          <Text
            className="text-[#690895] text-"
            style={{ fontFamily: "Inter-SemiBold", fontSize: 16 }}
          >
            {title}
          </Text>
        </View>

        <View className="mt-4">
          <Text
            className="text-[#757D85]"
            style={{ fontFamily: "Nunito-Sans-Regular" }}
          >
            {text}
          </Text>
        </View>

        <View className="bg-[#E9A400] rounded-full overflow-hidden mt-4 self-start">
          <Pressable
            className="flex-row items-center justify-center px-4 py-3"
            android_ripple={{ color: "#C78200" }}
            onPress={() => console.log("Download Template")}
          >
            <Icon source={icon} size={20} />
            <Text
              className="ml-2 text-xs text-white"
              style={{ fontFamily: "Manrope-Bold" }}
            >
              {buttonText}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default InputTamuCard;
