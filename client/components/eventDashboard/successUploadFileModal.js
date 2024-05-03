import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const SuccessUploadFileModal = ({ hideModal }) => {
  return (
    <View>
      <Image
        source={require("../../assets/eventDashboard/success-circle.png")}
      />
      <Text
        className="text-[#385150] text-2xl mt-8"
        style={{ fontFamily: "Inter-SemiBold" }}
      >
        Upload berhasil!
      </Text>
      <Text
        className="mt-4 text-[#757D85]"
        style={{ fontFamily: "Manrope-Regular" }}
      >
        Silakan periksa data yang baru saja Anda unggah di menu RSVP.
      </Text>
      <View className="bg-[#E9A400] rounded-full overflow-hidden mt-12">
        <Pressable
          className="items-center py-2"
          android_ripple={{ color: "#C78200" }}
          onPress={() => hideModal()}
        >
          <Text className="text-white" style={{ fontFamily: "Inter-Bold" }}>
            Done
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SuccessUploadFileModal;
