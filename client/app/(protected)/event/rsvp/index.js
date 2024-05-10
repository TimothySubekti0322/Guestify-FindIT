import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import TextInputRsvp from "../../../../components/rsvp/textInput";
import KonfirmasiKehadiranOption from "../../../../components/rsvp/konfirmasiKehadiranOption";
import KonfirmasiRsvpButton from "../../../../components/rsvp/konfirmasiRSVPButton";
import EventDetail from "../../../../components/rsvp/eventDetail";
import { formatMonthDateYear } from "../../../../utils/dateFormater";
import BASE_URL from "../../../../static/API";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

const initialFormData = {
  nama: "",
  telepon: "",
  kehadiran: true,
  totalTamu: "",
  harapan: "",
};

const index = () => {
  const searchParams = useLocalSearchParams();

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const submitData = {
        eventId: searchParams?.eventId,
        eventName: searchParams?.eventName,
        date: searchParams?.date,
        eventCode: searchParams?.eventCode,
        rsvpStatus: formData.kehadiran ? "confirmed" : "declined",
        totalGuest: formData.totalTamu,
      };
      const token = await AsyncStorage.getItem("token");
      const response = await axios.post(`${BASE_URL}/rsvp`, submitData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.message == "success") {
        router.replace("./successPage");
      }
    } catch (error) {
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />
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
            title={searchParams?.eventName || "Acara Pernikahan"}
            name={searchParams?.owner || "Michael & Fenny"}
            location={searchParams?.location || "Jakarta, Indonesia"}
            date={
              formatMonthDateYear(new Date(searchParams?.date)) ||
              "February 11, 2024"
            }
          />

          {/* Isi Data Diri */}
          <Text
            className="text-[#31013F] text-lg mt-8 mb-4"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Isi Data Diri
          </Text>

          {/* Nama Lengkap */}
          <TextInputRsvp
            title="Nama Lengkap"
            placeholder="Masukan Nama Lengkap Kamu"
            name="nama"
            handleChange={handleChange}
            type="text"
          />

          {/* Nama Telepon */}
          <TextInputRsvp
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
          <TextInputRsvp
            title="Total Tamu"
            placeholder="Masukan Total Tamu"
            name="totalTamu"
            handleChange={handleChange}
            type="number"
          />

          {/* Harapan Kamu */}
          <TextInputRsvp
            title="Harapan Kamu"
            placeholder="Masukan Harapan Kamu"
            name="harapan"
            handleChange={handleChange}
            type="text"
          />

          {/* Button RSVP */}
          <KonfirmasiRsvpButton handleSubmit={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
