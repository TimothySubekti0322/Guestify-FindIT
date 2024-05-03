import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const FailedUploadFileModal = ({ fileName, hideModal }) => {
  return (
    <View>
      <Image source={require("../../assets/eventDashboard/error-circle.png")} />
      <Text
        className="text-[#385150] text-2xl mt-8"
        style={{ fontFamily: "Inter-SemiBold" }}
      >
        Upload gagal
      </Text>
      <Text
        className="mt-4 text-[#757D85]"
        style={{ fontFamily: "Manrope-Regular" }}
      >
        Silakan baca file error yang baru saja diunduh dan perbaiki data Anda
        agar sesuai dengan format yang ditentukan. Kemudian upload kembali file
        spreadsheet yang telah Anda koreksi.
      </Text>
      <Text
        className="mt-3 text-[#757D85]"
        style={{ fontFamily: "Manrope-Medium" }}
      >
        Nama file : {""}
        <Text className="text-[#757D85]" style={{ fontFamily: "Manrope-Bold" }}>
          {fileName}
        </Text>
      </Text>
      <View className="bg-[#E9A400] rounded-full overflow-hidden mt-12">
        <Pressable
          className="items-center py-2"
          android_ripple={{ color: "#C78200" }}
          onPress={() => hideModal()}
        >
          <Text className="text-white" style={{ fontFamily: "Inter-Bold" }}>
            close
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FailedUploadFileModal;
