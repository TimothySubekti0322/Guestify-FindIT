import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import EventItems from "../../../../components/qrList/eventItems";
import { Stack, router } from "expo-router";
import Header from "../../../../components/header/header";

const index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="bg-[#F7F7F7] px-6 pt-12" style={{ flex: 1 }}>
        {/* Top Component */}
        <Header title="Daftar QR Code" />
        <ScrollView
          className="w-full"
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Content */}
          <EventItems
            title="Acara A"
            date="25 April 2024"
            id="A100"
            type="marriage"
            backgroundColor="#F5EDFF"
          />
          <EventItems
            title="Acara B"
            date="26 April 2024"
            id="A101"
            type="birthday"
            backgroundColor="#FFF7EF"
          />
          <EventItems
            title="Acara C"
            date="25 April 2024"
            id="A102"
            type="wedding"
            backgroundColor="#FBEFFC"
          />
          <EventItems
            title="Acara D"
            date="30 April 2024"
            id="A103"
            type="lunch"
            backgroundColor="#FFF4DE"
          />
          <EventItems
            title="Acara A"
            date="25 April 2024"
            id="A100"
            type="marriage"
            backgroundColor="#F5EDFF"
          />
          <EventItems
            title="Acara B"
            date="26 April 2024"
            id="A101"
            type="birthday"
            backgroundColor="#FFF7EF"
          />
          <EventItems
            title="Acara C"
            date="25 April 2024"
            id="A102"
            type="wedding"
            backgroundColor="#FBEFFC"
          />
          <EventItems
            title="Acara D"
            date="30 April 2024"
            id="A103"
            type="lunch"
            backgroundColor="#FFF4DE"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
