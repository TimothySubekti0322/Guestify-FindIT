import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";
import axios from "axios";
import BASE_URL from "../../../static/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Event = ({ setPage }) => {
  const [invitationCode, setInvitationCode] = useState("");
  const [invitationCodeError, setInvitationCodeError] = useState("");

  const handleSubmit = async () => {
    if (invitationCode !== "") {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(
          `${BASE_URL}/rsvp/checkInvitationCode/${invitationCode}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.message == "Event Code not found") {
          setInvitationCodeError("Code is Invalid");
        } else if (response.data.message == "success") {
          setInvitationCodeError("");
          const paramsData = {
            invitationCode: invitationCode,
            ...response.data.data,
          };
          router.push({
            pathname: "../event/rsvp",
            params: paramsData,
          });
        }
      } catch (error) {
        Alert.alert("Error", error.message, [
          {
            text: "OK",
          },
        ]);
      }
    }
  };
  return (
    <>
      <StatusBar style="light" />

      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ backgroundColor: "#FFFFFF", flexGrow: 1 }}
      >
        <ImageBackground
          source={require("../../../assets/event/header-background.png")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: 160,
          }}
        >
          <View className="items-center justify-center w-full h-full">
            <Text
              className="text-2xl text-white"
              style={{ fontFamily: "Inter-SemiBold" }}
            >
              Event
            </Text>
          </View>
        </ImageBackground>

        {/* Content */}
        <View
          className="bg-[#F7F7F7] relative pt-16 pb-12 px-8 justify-between"
          style={{ flex: 1 }}
        >
          <View className="absolute flex-row items-center self-center justify-center h-16 px-6 bg-white rounded-xl z-1 -top-8">
            <Text
              className="text-[#6D6D6D]"
              style={{ fontFamily: "Manrope-SemiBold" }}
            >
              Ikuti acara dengan kode secara mudah!
            </Text>
          </View>
          <View>
            {/* Main Picture */}
            <View className="overflow-hidden rounded-xl">
              <Image
                source={require("../../../assets/event/main-picture.png")}
              />
              {/* Black Layer */}
              <View className="absolute bg-black h-full w-[99.5%] opacity-40 rounded-xl" />
              <View className="absolute bottom-0 pb-4 pl-6">
                <Text
                  className="text-xl text-white"
                  style={{ fontFamily: "Inter-SemiBold" }}
                >
                  Ada undangan
                </Text>
                <Text
                  className="text-xl text-white"
                  style={{ fontFamily: "Inter-SemiBold" }}
                >
                  ke acara apa nih..
                </Text>
              </View>
            </View>
            <Text
              className="mt-6 text-[#690895]"
              style={{ fontFamily: "Manrope-Bold" }}
            >
              Kode Undangan
            </Text>
            {/* Kode Undangan */}
            <TextInput
              placeholder="Masukan Kode Undangan Acara"
              keyboardType="default"
              className={`${
                invitationCodeError && "border-2 border-red-500"
              } bg-[#F1F1F1] p-3 rounded-xl mt-2`}
              onChangeText={(text) => setInvitationCode(text)}
            />
            {invitationCodeError !== "" && (
              <Text className="mt-1 text-red-500">{invitationCodeError}</Text>
            )}
            {/* Submit Button */}
          </View>
        </View>
        <View className="px-8 bg-[#F7F7F7] h-full" style={{ flex: 1 }}>
          <View
            className="bg-[#E9A400] rounded-full w-full overflow-hidden"
            style={{ elevation: 2 }}
          >
            <Pressable
              android_ripple={{ color: "#C78200" }}
              className="p-4"
              onPress={() => handleSubmit()}
            >
              <Text
                className="text-lg text-center text-white"
                style={{ fontFamily: "Manrope-Bold" }}
              >
                Lanjutkan
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Event;
