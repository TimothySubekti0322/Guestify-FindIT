import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const LoadingModal = () => {
  return (
    <>
      <ActivityIndicator
        animating={true}
        color="#690895"
        size={80}
        className="self-center w-24 mt-12"
      />
      <Text
        className="self-center mt-8 mb-12 text-lg"
        style={{ fontFamily: "Manrope-Bold" }}
      >
        Loading
      </Text>
    </>
  );
};

export default LoadingModal;
