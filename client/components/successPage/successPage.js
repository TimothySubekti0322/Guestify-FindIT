import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";

const SuccessPage = ({ message, buttonText, buttonRoute }) => {
  const buttonHandler = () => {
    if (buttonRoute) {
      router.replace(buttonRoute);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        className="items-center justify-center px-12"
        style={{ flex: 1 }}
      >
        <Image source={require("../../assets/rsvp/success.png")} />
        <Text
          className="text-[#690895] text-3xl mt-6"
          style={{ fontFamily: "Manrope-Bold" }}
        >
          Berhasil
        </Text>
        <Text
          className="mt-4 text-center"
          style={{ fontFamily: "Manrope-Regular" }}
        >
          {message}
        </Text>
        <View
          className="overflow-hidden rounded-full bg-[#E9A400] mt-24 w-full"
          style={{ elevation: 3 }}
        >
          <Pressable
            className="items-center w-full py-4"
            android_ripple={{ color: "#C78200" }}
            onPress={buttonHandler}
          >
            <Text className="text-white" style={{ fontFamily: "Manrope-Bold" }}>
              {buttonText}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SuccessPage;
