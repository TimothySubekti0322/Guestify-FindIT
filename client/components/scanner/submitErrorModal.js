import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const SubmitErrorModal = ({ hideModal, setSubmitError }) => {
  return (
    <>
      <Image
        source={require("../../assets/scanner/big-error-circle.png")}
        className="self-center"
      />
      <Text
        className="self-center text-[#ED4C4D] text-lg mt-4"
        style={{ fontFamily: "Inter-SemiBold" }}
      >
        Gagal !
      </Text>
      <Text className="self-center mt-2 text-center">
        Pastikan kode yang anda masukan sama dengan yang tertera pada undangan.
      </Text>
      <View
        className="bg-[#E9A400] rounded-full w-full mt-8 overflow-hidden self-center"
        style={{ elevation: 2 }}
      >
        <Pressable
          android_ripple={{ color: "#C78200" }}
          className="flex-row items-center justify-center p-3"
          onPress={() => {
            hideModal();
            setSubmitError(false);
          }}
        >
          <Text
            className="ml-2 text-center text-white"
            style={{ fontFamily: "Manrope-Bold", fontSize: 16 }}
          >
            kembali
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default SubmitErrorModal;
