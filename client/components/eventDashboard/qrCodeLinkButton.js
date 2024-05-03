import { View, Text, Pressable, ToastAndroid } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import * as Clipboard from "expo-clipboard";

const QrCodeLinkButton = ({ link }) => {
  const copyToClipboard = async () => {
    console.log("copied to clipboard");
    ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
    await Clipboard.setStringAsync(link);
  };
  return (
    <View className="bg-[#E9A400] rounded-xl w-28 overflow-hidden">
      <Pressable
        className="flex-row items-center justify-center h-8"
        android_ripple={{ color: "#C78200" }}
        onPress={() => copyToClipboard()}
      >
        <Icon
          source={require("../../assets/eventDashboard/copy.png")}
          size={15}
        />
        <Text className="ml-2 text-white">Copy Link</Text>
      </Pressable>
    </View>
  );
};

export default QrCodeLinkButton;
