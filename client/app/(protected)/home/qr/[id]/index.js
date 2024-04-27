import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../../components/header/header";
import Button from "../../../../../components/button/button";

const dummyQr = require("../../../../../assets/qr/qr.png");

const index = () => {
  const [qr, setQr] = useState(dummyQr); // [1
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        className="bg-[#F7F7F7] px-6 pt-12 justify-between"
        style={{ flex: 1 }}
      >
        <Header title="QR Code" />
        <View className="items-center px-4">
          <Text
            className="text-[#6D6D6D] text-lg"
            style={{ fontFamily: "Manrope-Medium" }}
          >
            Tunjukan QR Code dibawah ini
          </Text>
          <Text
            className="text-[#6D6D6D] text-lg"
            style={{ fontFamily: "Manrope-Medium" }}
          >
            sebelum masuk ke acaranya, ya!
          </Text>
          <View className="border-[1px] items-center border-[#6D6D6D] rounded-xl px-6 py-6 mt-6">
            <Image source={qr} />
            <Text
              className="text-[#690895] mt-4 text-xl"
              style={{ fontFamily: "Manrope-Bold" }}
            >
              {id}
            </Text>
          </View>
        </View>
        <Button
          title="Kembali ke Daftar Acara"
          handlePress={() => router.back()}
        />
      </SafeAreaView>
    </>
  );
};

export default index;
