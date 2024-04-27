import { Text, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import ModalButton from "./modalButton";

const ModalConfirmationContent = () => {
  return (
    <>
      <Image source={require("../../assets/pembayaran/modal-check.png")} />
      <Text
        className="text-center text-[#690895] text-2xl mt-6"
        style={{ fontFamily: "Inter-SemiBold" }}
      >
        Berhasil!
      </Text>
      <Text
        className="w-4/5 mt-3 text-center"
        style={{ fontFamily: "Inter-SemiBold", fontSize: 13 }}
      >
        Silahkan menuju Dashboard untuk mengelola acaramu.
      </Text>
      <ModalButton
        title="Ke Dashboard"
        handlePress={() =>
          router.replace({
            pathname: "../../layout",
            params: { screen: "dashboard" },
          })
        }
      />
    </>
  );
};

export default ModalConfirmationContent;
