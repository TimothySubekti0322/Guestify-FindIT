import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import EventItems from "../../../../components/qrList/eventItems";
import { Stack, router } from "expo-router";
import Header from "../../../../components/header/header";
import axios from "axios";
import BASE_URL from "../../../../static/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoDataComponent from "../../../../components/noData/noDataComponent";
import { formatDateMonthYear } from "../../../../utils/dateFormater";

const index = () => {
  const [loading, setLoading] = useState(true);
  const [qrCodeList, setQrCodeList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/qrCode`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQrCodeList(response.data.qrCodes);
      setLoading(false);
    };
    fetchData();
  }, []);
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
          {loading && (
            <View className="items-center justify-center" style={{ flex: 1 }}>
              <ActivityIndicator
                animating={true}
                color="#BB7EB1"
                size="large"
              />
              <Text className="text-[#6D6D6D] mt-4">Loading...</Text>
            </View>
          )}
          {!loading && qrCodeList.length === 0 && <NoDataComponent />}
          {qrCodeList?.map((qrCode) => (
            <EventItems
              key={qrCode.id}
              title={qrCode.eventName}
              date={formatDateMonthYear(new Date(qrCode.date))}
              id={qrCode.eventCode}
              type="marriage"
              backgroundColor="#F5EDFF"
              qrCodeUrl={qrCode.qrCodeUrl}
            />
          ))}
          {/* <EventItems
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
          /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
