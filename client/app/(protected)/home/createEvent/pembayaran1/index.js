import { View, Text, ScrollView, Image } from "react-native";
import React, { useState, useContext } from "react";
import { CreateEventContext } from "../../../../../store/context/createEventContext";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../../components/header/header";
import MetodePembayaran from "../../../../../components/pembayaran/metodePembayaran";
import MetodePembayaranImage from "../../../../../static/image/metodePembayaran";
import Button from "../../../../../components/button/button";
import { formatCurrency } from "../../../../../utils/numberFormater";

const Pembayaran1 = () => {
  const createEventCtx = useContext(CreateEventContext);
  const price = formatCurrency(createEventCtx.price, "Rp", false, true);
  const [metodePembayaran, setMetodePembayaran] = useState("");

  const handleNext = () => {
    createEventCtx.setPaymentMethod(metodePembayaran);
    router.push("/home/createEvent/pembayaran2");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        className="bg-[#F7F7F7] px-8"
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View className="mt-5">
            <Header title="Pembayaran" />
          </View>
          <Text className="-mt-4" style={{ fontFamily: "Manrope-SemiBold" }}>
            Total Tagihan
          </Text>
          <Text
            className="text-[#690895] text-3xl mt-2"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            {price}
          </Text>
          <Text className="mt-6" style={{ fontFamily: "Manrope-SemiBold" }}>
            Pilih Metode Pembayaran
          </Text>

          {/* Option */}
          <MetodePembayaran
            title="Bank Transfer (BCA)"
            value="BCA Bank Transfer"
            metodePembayaran={metodePembayaran}
            setMetodePembayaran={setMetodePembayaran}
            image={MetodePembayaranImage.bca}
          />
          <MetodePembayaran
            title="Bank Transfer (BNI)"
            value="BNI Bank Transfer"
            metodePembayaran={metodePembayaran}
            setMetodePembayaran={setMetodePembayaran}
            image={MetodePembayaranImage.bni}
          />
          <MetodePembayaran
            title="Bank Transfer (BRI)"
            value="BRI Bank Transfer"
            metodePembayaran={metodePembayaran}
            setMetodePembayaran={setMetodePembayaran}
            image={MetodePembayaranImage.bri}
          />
          <MetodePembayaran
            title="Virtual Account (BCA)"
            value="BCA Virtual Account"
            metodePembayaran={metodePembayaran}
            setMetodePembayaran={setMetodePembayaran}
            image={MetodePembayaranImage.bca}
          />
          <MetodePembayaran
            title="Virtual Account (BNI)"
            value="BNI Virtual Account"
            metodePembayaran={metodePembayaran}
            setMetodePembayaran={setMetodePembayaran}
            image={MetodePembayaranImage.bni}
          />
          <MetodePembayaran
            title="Virtual Account (BRI)"
            value="BRI Virtual Account"
            metodePembayaran={metodePembayaran}
            setMetodePembayaran={setMetodePembayaran}
            image={MetodePembayaranImage.bri}
          />
          <Button title="Lanjutkan" handlePress={() => handleNext()} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Pembayaran1;
