import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const QrErrorModal = ({ handleRetry, setScreen }) => {
  return (
    <>
      <Image source={require("../../assets/scanner/error-circle.png")} />
      <Text
        className="text-[#690895] text-lg mt-3"
        style={{ fontFamily: "Inter-Bold" }}
      >
        Gagal Membaca QR Code
      </Text>
      <Text
        className="mt-3 text-[#757D85] leading-loose"
        style={{ fontFamily: "Manrope-Regular", lineHeight: 25 }}
      >
        Pastikan QR code yang Anda pindai sesuai dengan format yang tertera pada
        undangan. Jika Anda tidak dapat memindainya, Anda dapat mengetikkan kode
        undangan secara manual.
      </Text>
      <View
        className="bg-[#E9A400] rounded-full w-full mt-8 overflow-hidden"
        style={{ elevation: 2 }}
      >
        <Pressable
          android_ripple={{ color: "#C78200" }}
          className="flex-row items-center justify-center p-3"
          onPress={() => handleRetry()}
        >
          <Image source={require("../../assets/scanner/retry.png")} />

          <Text
            className="ml-2 text-center text-white"
            style={{ fontFamily: "Manrope-Bold", fontSize: 16 }}
          >
            Pindai Ulang
          </Text>
        </Pressable>
      </View>
      <View
        className="w-full border-[#E9A400] border-[1px] mt-4 overflow-hidden bg-white rounded-full "
        style={{ elevation: 2 }}
      >
        <Pressable
          android_ripple={{ color: "#DDDDDD" }}
          style={({ pressed }) => [
            {
              color: pressed ? "white" : "#E9A400",
              backgroundColor: pressed ? "#E9A400" : "white",
            },
          ]}
          className="flex-row items-center justify-center p-3"
          onPress={() => {
            setScreen("manual");
          }}
        >
          <Text
            className="ml-2 text-center text-[#E9A400]"
            style={{ fontFamily: "Manrope-Bold", fontSize: 16 }}
          >
            Ketik Secara Manual
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default QrErrorModal;
