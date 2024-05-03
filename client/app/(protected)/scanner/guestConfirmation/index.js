import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { Icon } from "react-native-paper";
import { Switch } from "react-native-switch";
import Button from "../../../../components/button/button";

const GuestConfirmation = () => {
  const [souvenir, setSouvenir] = useState(false);
  const [kado, setKado] = useState(false);
  const [totalGuest, setTotalGuest] = useState(1);

  const handleGuestChange = (type) => {
    if (type === "plus") {
      setTotalGuest(totalGuest + 1);
    } else if (type === "minus" && totalGuest > 1) {
      setTotalGuest(totalGuest - 1);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="bg-[#F5EDFF]" style={{ flex: 1 }}>
        <View className="relative flex-row justify-center mt-20 mb-12">
          <Pressable
            className="absolute left-8 bg-[#FFFFFF] rounded-xl p-1"
            onPress={() => router.back()}
          >
            <Icon source="chevron-left" size={32} />
          </Pressable>
          <Image
            source={require("../../../../assets/scanner/confirmation.png")}
          />
        </View>
        <View
          className="px-8 pt-8 bg-white"
          style={{ flex: 1, borderTopLeftRadius: 60, borderTopRightRadius: 60 }}
        >
          <Text
            className="self-center text-xl text-[#31013F]"
            style={{ fontFamily: "Inter-Bold" }}
          >
            Acara A
          </Text>
          <Text
            className="text-[#690895] text-lg mt-4"
            style={{ fontFamily: "Manrope-Bold" }}
          >
            Informasi Utama
          </Text>
          <View className="flex-row justify-between mt-4">
            <Text style={{ fontFamily: "Manrope-Bold" }}>Nama Tamu</Text>
            <Text>Micahel Sihotang</Text>
          </View>
          <View className="flex-row justify-between mt-4">
            <Text style={{ fontFamily: "Manrope-Bold" }}>Nama Meja</Text>
            <Text>2A</Text>
          </View>
          <View className="flex-row justify-between mt-4">
            <Text style={{ fontFamily: "Manrope-Bold" }}>Total Tamu</Text>
            <View className="flex-row gap-x-4">
              {/* Minus Button */}
              <Pressable
                className="bg-[#F5EDFF] rounded-full p-1"
                onPress={() => handleGuestChange("minus")}
              >
                <Icon source="minus" size={16} />
              </Pressable>
              {/* Value */}
              <Text>{totalGuest}</Text>
              {/* Plus Button */}
              <Pressable
                className="bg-[#F5EDFF] rounded-full p-1"
                onPress={() => handleGuestChange("plus")}
              >
                <Icon source="plus" size={16} />
              </Pressable>
            </View>
          </View>

          {/* Horizontal Line */}
          <View className="border-b-2 border-[#C7C7C7] mt-4" />

          {/* Pilihan Section */}
          <Text
            className="text-[#690895] text-lg mt-4"
            style={{ fontFamily: "Manrope-Bold" }}
          >
            Pilihan
          </Text>
          <View className="flex-row items-center justify-between mt-4">
            <Text style={{ fontFamily: "Manrope-Bold" }}>Souvenir</Text>
            <Switch
              value={souvenir}
              onValueChange={() => setSouvenir(!souvenir)}
              backgroundActive="#690895"
              activeText=""
              inActiveText=""
              switchWidthMultiplier={2.1}
            />
          </View>
          <View className="flex-row items-center justify-between mt-6">
            <Text style={{ fontFamily: "Manrope-Bold" }}>Kado</Text>
            <Switch
              value={kado}
              onValueChange={() => setKado(!kado)}
              backgroundActive="#690895"
              activeText=""
              inActiveText=""
              switchWidthMultiplier={2.1}
            />
          </View>
          <View className="mt-6">
            <Button
              title="Konfirmasi"
              handlePress={() => router.push("./successPage")}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default GuestConfirmation;
