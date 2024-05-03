import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const LoadingUploadFileModal = () => {
  return (
    <View className="mt-8 mb-8">
      <ActivityIndicator animating={true} color="#E9A400" size="large" />
      <Text
        className="text-[#385150] text-xl mt-8 text-center"
        style={{ fontFamily: "Inter-SemiBold" }}
      >
        uploading...
      </Text>
    </View>
  );
};

export default LoadingUploadFileModal;
