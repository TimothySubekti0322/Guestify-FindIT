import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import { CreateEventContext } from "../../../../../store/context/createEventContext";
import { Stack, router } from "expo-router";
import Header from "../../../../../components/header/header";
import MetodePembayaranImage from "../../../../../static/image/metodePembayaran";
import AccordionVA from "../../../../../components/pembayaran/accordionVA";
import Button from "../../../../../components/button/button";
import { formatCurrency } from "../../../../../utils/numberFormater";

const Pembayaran2 = () => {
  const createEventCtx = useContext(CreateEventContext);
  const paymentMethodCtx = createEventCtx.paymentMethod;
  const bank = paymentMethodCtx.slice(0, 3);
  const paymentMethod = paymentMethodCtx.slice(3);
  const price = formatCurrency(createEventCtx.price, "Rp", false, true);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        className="bg-[#F7F7F7] px-8"
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View className="mt-12">
            <Header title="Pembayaran" />
          </View>
          <Text style={{ fontFamily: "Manrope-SemiBold", fontSize: 15 }}>
            Lengkapi Pembayaran
          </Text>
          <View className="px-4 py-4 bg-white border-[0.5px] rounded-xl border-[#7D7D7D] mt-3">
            <Text style={{ fontFamily: "Manrope-Medium" }}>Transfer to</Text>
            <View className="flex-row items-center">
              {bank === "BCA" && (
                <Image
                  source={MetodePembayaranImage.bca}
                  style={{ resizeMode: "contain" }}
                  className="w-16"
                />
              )}
              {bank === "BNI" && (
                <Image
                  source={MetodePembayaranImage.bni}
                  style={{ resizeMode: "contain" }}
                  className="w-16"
                />
              )}
              {bank === "BRI" && (
                <Image
                  source={MetodePembayaranImage.bri}
                  style={{ resizeMode: "contain" }}
                  className="w-16"
                />
              )}
              <Text className="ml-3" style={{ fontFamily: "Manrope-SemiBold" }}>
                {createEventCtx.paymentMethod}
              </Text>
            </View>
            <View className="flex-row items-center justify-between px-4 py-3 bg-[#FFF8E6] border-[1px] border-[#E9A400] rounded-xl">
              <Text style={{ fontFamily: "Inter-Bold" }}>123 456 789 1011</Text>
              <Image
                source={MetodePembayaranImage.copy}
                style={{ resizeMode: "contain" }}
                className="w-6"
              />
            </View>
            <View className="w-full border-t-[1px] border-[#C2C2C2] mt-4"></View>
            {/* Total Payment */}
            <Text className="mt-4" style={{ fontFamily: "Manrope-SemiBold" }}>
              Total Payment
            </Text>
            <Text
              className="text-[#690895] text-xl mt-1"
              style={{ fontFamily: "Inter-SemiBold" }}
            >
              {price}
            </Text>
          </View>

          {/* Virtual Account */}
          <Text
            className="mt-8 mb-4"
            style={{ fontFamily: "Manrope-SemiBold", fontSize: 15 }}
          >
            {paymentMethod}
          </Text>
          <AccordionVA bank={bank} />
          <Button
            title="Konfirmasi Pembayaran"
            handlePress={() => router.push("/home/createEvent/summary")}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Pembayaran2;
