import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import SubMenu from "./subMenu";
import { Icon } from "react-native-paper";
import InputTamuCard from "./inputTamuCard";
import InputTamuImage from "../../static/image/inputTamu";

const InputTamuSection = ({ subMenu, setSubMenu }) => {
  return (
    <View className="relative bg-[#F7F7F7] px-8 pt-10" style={{ flex: 1 }}>
      {/* SubMenu */}
      <SubMenu subMenu={subMenu} setSubMenu={setSubMenu} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <InputTamuCard
          number={1}
          title="Silahkan download template"
          text="Silakan klik tombol “Download Template” di sini untuk mendapatkan template daftar tamu dalam format file spreadsheet (*.XLS). Selanjutnya, isi file tersebut dengan data tamu Anda sesuai format yang ditentukan."
          icon={InputTamuImage.download}
          buttonText="Download Template"
        />
        <View className="mt-6">
          <InputTamuCard
            number={2}
            title="Unggah file yang telah Anda isi"
            text="Kemudian upload file yang sudah Anda isi dengan mengklik tombol upload di bawah. Format file harus *.XLS dengan ukuran maksimal 100 KB."
            icon={InputTamuImage.upload}
            buttonText="Upload File"
          />
        </View>
        <View className="mt-6 mb-12">
          <InputTamuCard
            number={3}
            title="Unggah file yang dihasilkan"
            text="Terakhir, Anda dapat mendownload hasilnya setelah tombol download dapat diklik."
            icon={InputTamuImage.download}
            buttonText="Download Generated File"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default InputTamuSection;
