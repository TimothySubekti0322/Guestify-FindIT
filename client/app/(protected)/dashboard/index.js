import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import MainPageHeader from "../../../components/header/mainPageHeader";
import Navbar from "../../../components/navbar/navbar";
import EventCard from "../../../components/dashboard/eventCard";
import DashboardCardImage from "../../../static/image/dashboardCard";

const Dashboard = ({ setPage }) => {
  const now = new Date();
  const tommorow = new Date();
  tommorow.setDate(now.getDate() + 1);
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <MainPageHeader title={"Dashboard"} />
      <View className="relative bg-[#F7F7F7] px-8" style={{ flex: 1 }}>
        <View className="absolute flex-row items-center self-center justify-center h-16 px-6 bg-white rounded-xl z-1 -top-8">
          <Text
            className="text-[#6D6D6D]"
            style={{ fontFamily: "Manrope-SemiBold" }}
          >
            Lihat dan kelola seluruh acaramu disini!
          </Text>
        </View>
        <ScrollView className="mt-10" showsVerticalScrollIndicator={false}>
          <View className="mt-4"></View>
          <EventCard
            image={DashboardCardImage.pernikahan}
            title="Acara Pernikahan"
            owner="Michael & Fenny"
            location="Wisma Tamansari, Medan"
            date={tommorow}
            setPage={setPage}
            idEvent="1"
          />
          <EventCard
            image={DashboardCardImage.birthday}
            title="Acara Ulang Tahun"
            owner="Michael Sihotang"
            location="Wisma Tamansari, Medan"
            date={now}
            setPage={setPage}
            idEvent="2"
          />
          <EventCard
            image={DashboardCardImage.party}
            title="Acara Ulang Tahun"
            owner="Sandy Samuel"
            location="Wisma Tamansari, Medan"
            date={yesterday}
            setPage={setPage}
            idEvent="3"
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;
