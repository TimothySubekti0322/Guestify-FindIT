import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import TextInputRSVP from "../../../../components/rsvp/textInput";
import KonfirmasiKehadiranOption from "../../../../components/rsvp/konfirmasiKehadiranOption";
import KonfirmasiRSVPButton from "../../../../components/rsvp/konfirmasiRSVPButton";
import EventDetail from "../../../../components/rsvp/eventDetail";
import DaftarAcaraCard from "../../../../components/rsvp/daftarAcaraCard";

const initialFormData = {
  nama: "",
  telepon: "",
  kehadiran: true,
  totalTamu: "",
  harapan: "",
};

const Rsvp = () => {
  const { invitationCode } = useLocalSearchParams();
  console.log(invitationCode);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setFormData((prev) => ({ ...prev, totalTamu: parseInt(prev.totalTamu) }));
    router.replace("./successPage");
    console.log(formData);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          className="bg-[#f7f7f7] px-8 "
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="relative flex-row items-center justify-center mt-12">
            <Pressable
              className="absolute left-0 bg-[#FFFFFF] rounded-xl p-1"
              onPress={() => router.back()}
            >
              <Icon source="chevron-left" size={32} />
            </Pressable>
            <Text
              className="text-[#31013F] text-2xl"
              style={{ fontFamily: "Inter-Bold" }}
            >
              Isi RSVP
            </Text>
          </View>
          <EventDetail
            title="Acara Pernikahan"
            name="Michael & Fenny"
            location="Jakarta, Indonesia"
            date="February 11, 2023"
          />

          <Text
            className="text-lg text-[#31013F] mt-8"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Daftar Acara
          </Text>
          {/* Daftar Acara Card */}
          <DaftarAcaraCard
            title="Pemberkatan Nikah"
            location="Gereja Katedral Jakarta"
            time="09:00 - 12:00"
            fileName="pemberkatan-nikah"
          />
          <DaftarAcaraCard
            title="Resepsi Pernikahan"
            location="Farimont Hotel, Jakarta"
            time="18:00 - 22:00"
            fileName="resepsi-pernikahan"
          />

          {/* Isi Data Diri */}
          <Text
            className="text-[#31013F] text-lg mt-8 mb-4"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Isi Data Diri
          </Text>

          {/* Nama Lengkap */}
          <TextInputRSVP
            title="Nama Lengkap"
            placeholder="Masukan Nama Lengkap Kamu"
            name="nama"
            handleChange={handleChange}
            type="text"
          />

          {/* Nama Telepon */}
          <TextInputRSVP
            title="Nomor Telepon"
            placeholder="Masukan Nomor Telepon Kamu"
            name="telepon"
            handleChange={handleChange}
            type="number"
          />

          {/* Konfirmasi Kehadiran */}
          <KonfirmasiKehadiranOption
            handleChange={handleChange}
            kehadiran={formData.kehadiran}
            name="kehadiran"
          />

          {/* Total Tamu */}
          <TextInputRSVP
            title="Total Tamu"
            placeholder="Masukan Total Tamu"
            name="totalTamu"
            handleChange={handleChange}
            type="number"
          />

          {/* Harapan Kamu */}
          <TextInputRSVP
            title="Harapan Kamu"
            placeholder="Masukan Harapan Kamu"
            name="harapan"
            handleChange={handleChange}
            type="text"
          />

          {/* Button RSVP */}
          <KonfirmasiRSVPButton handleSubmit={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Rsvp;
