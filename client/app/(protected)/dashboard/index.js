import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Stack } from "expo-router";
import MainPageHeader from "../../../components/header/mainPageHeader";
import EventCard from "../../../components/dashboard/eventCard";
import DashboardCardImage from "../../../static/image/dashboardCard";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";
import BASE_URL from "../../../static/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoDataComponent from "../../../components/noData/noDataComponent";
import { DashboardContext } from "../../../store/context/dashboardContext";
import { router } from "expo-router";

const Dashboard = ({ setPage, setIdEvent }) => {
  const dashboardCtx = useContext(DashboardContext);

  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvent(response.data.data);
      } catch (error) {
        Alert.alert("Error", error.message, [{ text: "OK" }]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePress = (data, idEvent) => {
    dashboardCtx.setData(data);
    setIdEvent(idEvent);
    setPage("eventDashboard");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
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
          {loading && (
            <View
              className="items-center justify-center mt-[20%]"
              style={{ flex: 1 }}
            >
              <ActivityIndicator size="large" color="#690895" />
              <Text className="text-[#690895] mt-4">Loading...</Text>
            </View>
          )}

          {event.length == 0 && !loading && <NoDataComponent />}
          {event?.map((item) => (
            <EventCard
              key={item.id}
              image={DashboardCardImage.pernikahan}
              title={item.eventName}
              owner={item.owner}
              location={item.location}
              date={new Date(item.date)}
              setPage={setPage}
              idEvent={item.id}
              data={item}
              handlePress={handlePress}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;
