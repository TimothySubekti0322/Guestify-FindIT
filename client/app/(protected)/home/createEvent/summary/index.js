import { View, Text, Image, Alert, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { CreateEventContext } from "../../../../../store/context/createEventContext";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../../components/header/header";
import SummaryDetailComponent from "../../../../../components/pembayaran/summaryDetailComponent";
import Button from "../../../../../components/button/button";
import {
  Modal,
  Portal,
  PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import ModalButton from "../../../../../components/pembayaran/modalButton";
import ModalConfirmationContent from "../../../../../components/pembayaran/modalConfirmationContent";
import { formatDayDateMonthYear } from "../../../../../utils/dateFormater";
import { formatCurrency } from "../../../../../utils/numberFormater";
import axios from "axios";
import BASE_URL from "../../../../../static/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Summary = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const createEventCtx = useContext(CreateEventContext);
  const type = createEventCtx.type;
  const owner = createEventCtx.owner;
  const eventName = createEventCtx.name;
  const guest = createEventCtx.guest;
  const location = createEventCtx.location;
  const date = formatDayDateMonthYear(new Date(createEventCtx.date));
  const price = formatCurrency(createEventCtx.price, "Rp", false, true);
  const paymentMethod = createEventCtx.paymentMethod;

  const handleSubmit = async () => {
    console.log("Submit");
    setLoading(true);
    const token = await AsyncStorage.getItem("token");

    const formData = {
      type: type,
      owner: owner,
      eventName: eventName,
      guest: guest,
      location: location,
      date: createEventCtx.date,
      cost: createEventCtx.price,
      paymentMethod: paymentMethod,
    };
    try {
      const response = await axios.post(`${BASE_URL}/event/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status == 201) {
        showModal();
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message, [
        {
          text: "OK",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <PaperProvider>
        {/* Modal */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 50,
              paddingVertical: 40,
              width: "80%",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <ModalConfirmationContent />
          </Modal>
        </Portal>
        <SafeAreaView
          className="bg-[#F7F7F7] px-8"
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="mt-12">
            <Header title="Summary" />
          </View>

          {/* First Summary Box */}
          <View className="bg-white border-[0.5px] border-[#7D7D7D] rounded-xl px-4 py-4">
            <Text className="" style={{ fontFamily: "Inter-SemiBold" }}>
              Detail Acara
            </Text>
            <View className="border-t-[1px] border-[#C2C2C2] mt-3"></View>
            <SummaryDetailComponent name="Tipe Acara" value={type} />
            <SummaryDetailComponent name="Nama Penyelenggara" value={owner} />
            <SummaryDetailComponent name="Nama Acara" value={eventName} />
            <SummaryDetailComponent
              name="Jumlah Tamu"
              value={`${guest} tamu`}
            />
            <SummaryDetailComponent name="Tempat Acara" value={location} />
            <SummaryDetailComponent name="Tanggal Acara" value={date} />
          </View>

          {/* Second Summary Box */}
          <View className="bg-white border-[0.5px] border-[#7D7D7D] rounded-xl px-4 py-4 mt-8">
            <Text className="" style={{ fontFamily: "Inter-SemiBold" }}>
              Detail Harga
            </Text>
            <View className="border-t-[1px] border-[#C2C2C2] mt-3"></View>
            <SummaryDetailComponent name="Total" value={price} />
            <View className="self-start border-[1px] border-[#3EC04B] rounded-full flex-row px-2 py-[2px] items-center mt-4">
              <View className="border-[3px] border-[#3EC04B] self-center rounded-full"></View>
              <Text className="ml-1 text-[#3EC04B]">Paid</Text>
            </View>
          </View>

          <View className="absolute left-0 right-0 items-center px-8 bottom-12">
            <View
              className="bg-[#E9A400] rounded-full w-full my-8 overflow-hidden"
              style={{ elevation: 2 }}
            >
              <Pressable
                android_ripple={{ color: "#C78200" }}
                className="p-4"
                onPress={() => handleSubmit()}
              >
                {loading ? (
                  <ActivityIndicator animating={true} color="white" size={20} />
                ) : (
                  <Text
                    className="text-lg text-center text-white"
                    style={{ fontFamily: "Manrope-Bold" }}
                  >
                    Konfirmasi Pembayaran
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default Summary;
