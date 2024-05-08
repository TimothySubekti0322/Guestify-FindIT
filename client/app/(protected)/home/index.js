import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import TestimonialCard from "../../../components/home/testimonialCard";
import DaftarQR from "../../../components/home/daftarQR";
import BuatAcara from "../../../components/home/buatAcara";
import { StatusBar } from "expo-status-bar";
import Header from "../../../components/home/header";
import AbsoluteHeader from "../../../components/home/absoluteHeader";
import FiturLainnya from "../../../components/home/fiturLainnya";
import { DashboardContext } from "../../../store/context/dashboardContext";

const Home = ({ setPage }) => {
  const dashboardCtx = useContext(DashboardContext);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <ScrollView
        className="w-full"
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header />

        {/* Content */}
        <View className="bg-[#F7F7F7] relative py-16 px-8">
          <AbsoluteHeader />

          {/* Main Content */}
          <View className="flex-row items-center justify-between">
            <DaftarQR />
            <BuatAcara />
          </View>

          {/* Fitur Lainnya */}
          <Text
            className="mt-8 text-xl"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Fitur Lainnya
          </Text>
          <View className="flex-row items-center justify-between w-full">
            {/* RSVP */}
            <FiturLainnya
              backgroundColor="#F5EDFF"
              assets="rsvp"
              title="RSVP Acara"
              setPage={setPage}
            />

            {/* Buku Tamu */}
            <FiturLainnya
              backgroundColor="#FFF7EF"
              assets="book"
              title="Buku Tamu"
              setPage={setPage}
            />
            {/* Check-In QR */}
            <FiturLainnya
              backgroundColor="#FBEFFC"
              assets="barcode"
              title="Check-In QR"
              setPage={setPage}
            />
          </View>

          {/* Testimonial */}
          <Text
            className="mt-8 text-xl"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            Testimonial
          </Text>

          {/* Testimonial Card */}
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
