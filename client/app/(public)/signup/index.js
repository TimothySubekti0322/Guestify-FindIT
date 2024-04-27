import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";
import { Stack, router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

const index = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={0}
      >
        <ImageBackground
          source={require("../../../assets/login/login-background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View className="h-[20%] px-4 pt-[7%] self-start">
              <Pressable
                className="flex-row items-center w-fit"
                onPress={() => router.back()}
              >
                <Entypo name="chevron-left" size={32} color="white" />
                <Text
                  className="text-xl text-white"
                  style={{ fontFamily: "Manrope-Medium" }}
                >
                  Kembali
                </Text>
              </Pressable>
            </View>

            <ScrollView
              className="bg-white rounded-t-[50px] w-full px-8 py-10"
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              <View>
                <View className="items-center w-full">
                  <Text
                    className="text-3xl text-[#690895]"
                    style={{ fontFamily: "Inter-Bold" }}
                  >
                    Sign Up
                  </Text>
                  <TextInput
                    theme={{ roundness: 40 }}
                    className="bg-[#F4F4F4] outline-0 w-full mt-10"
                    mode="outlined"
                    placeholder="Nama"
                    left={
                      <TextInput.Icon
                        icon={require("../../../assets/signup/text-input.png")}
                      />
                    }
                    style={{ borderRadius: 100 }}
                  />
                  <TextInput
                    theme={{ roundness: 40 }}
                    className="bg-[#F4F4F4] outline-0 w-full mt-6"
                    mode="outlined"
                    placeholder="Email"
                    left={
                      <TextInput.Icon
                        icon={require("../../../assets/signup/email.png")}
                      />
                    }
                    style={{ borderRadius: 100 }}
                  />
                  <TextInput
                    theme={{ roundness: 40 }}
                    className="bg-[#F4F4F4] outline-0 w-full mt-6"
                    mode="outlined"
                    placeholder="Username"
                    left={
                      <TextInput.Icon
                        icon={require("../../../assets/login/user.png")}
                      />
                    }
                    style={{ borderRadius: 100 }}
                  />
                  <TextInput
                    theme={{ roundness: 40 }}
                    className="bg-[#F4F4F4] outline-0 w-full mt-6"
                    mode="outlined"
                    placeholder="Kata Sandi"
                    secureTextEntry={!passwordVisibility}
                    left={
                      <TextInput.Icon
                        icon={require("../../../assets/login/lock.png")}
                      />
                    }
                    right={
                      passwordVisibility ? (
                        <TextInput.Icon
                          icon={require("../../../assets/login/eye-open.png")}
                          onPress={() =>
                            setPasswordVisibility(!passwordVisibility)
                          }
                        />
                      ) : (
                        <TextInput.Icon
                          icon={require("../../../assets/login/eye-closed.png")}
                          onPress={() =>
                            setPasswordVisibility(!passwordVisibility)
                          }
                        />
                      )
                    }
                    style={{ borderRadius: 100 }}
                  />
                  <TextInput
                    theme={{ roundness: 40 }}
                    className="bg-[#F4F4F4] outline-0 w-full mt-6"
                    mode="outlined"
                    placeholder="Konfirmasi Kata Sandi"
                    secureTextEntry={!confirmPasswordVisibility}
                    left={
                      <TextInput.Icon
                        icon={require("../../../assets/login/lock.png")}
                      />
                    }
                    right={
                      confirmPasswordVisibility ? (
                        <TextInput.Icon
                          icon={require("../../../assets/login/eye-open.png")}
                          onPress={() =>
                            setConfirmPasswordVisibility(
                              !confirmPasswordVisibility
                            )
                          }
                        />
                      ) : (
                        <TextInput.Icon
                          icon={require("../../../assets/login/eye-closed.png")}
                          onPress={() =>
                            setConfirmPasswordVisibility(
                              !confirmPasswordVisibility
                            )
                          }
                        />
                      )
                    }
                    style={{ borderRadius: 100 }}
                  />
                  <View className="flex-row items-center mt-6">
                    <Text
                      className="text-[#6D6D6D]"
                      style={{ fontFamily: "Inter-Regular" }}
                    >
                      Sudah punya akun?
                    </Text>
                    <Pressable
                      className="ml-1"
                      onPress={() => router.push("../login")}
                    >
                      <Text
                        className="text-[#690895] font-bold underline decoration-[#690895] underline-offset-8 decoration-4"
                        style={{ fontFamily: "Inter-Bold" }}
                      >
                        Log In
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              <Button
                className="w-full mt-8 rounded-full"
                buttonColor="#690895"
                textColor="white"
              >
                <Text className="text-xl">Sign Up</Text>
              </Button>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

export default index;
