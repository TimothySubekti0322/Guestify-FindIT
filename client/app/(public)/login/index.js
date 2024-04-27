import { StatusBar } from "expo-status-bar";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

const index = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleLogin = () => {
    router.replace({ pathname: "../layout", params: { screen: "home" } });
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View className="" style={{ flex: 1 }}>
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
                className="flex-row items-center"
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
            <View
              className="bg-white rounded-t-[50px] w-full px-8 py-10 justify-between"
              style={{ flex: 1 }}
            >
              <View className="items-center w-full">
                <Text
                  className="text-3xl text-[#690895]"
                  style={{ fontFamily: "Inter-Bold" }}
                >
                  Login
                </Text>
                <TextInput
                  theme={{ roundness: 40 }}
                  className="bg-[#F4F4F4] outline-0 w-full mt-10"
                  mode="outlined"
                  placeholder="Email / Username"
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
                <View className="flex-row items-center mt-6">
                  <Text
                    className="text-[#6D6D6D]"
                    style={{ fontFamily: "Inter-Regular" }}
                  >
                    Belum punya akun?
                  </Text>
                  <Pressable
                    className="ml-1"
                    onPress={() => router.push("../signup")}
                  >
                    <Text
                      className="text-[#690895] font-bold underline decoration-[#690895] underline-offset-8 decoration-4"
                      style={{ fontFamily: "Inter-Bold" }}
                    >
                      Sign Up
                    </Text>
                  </Pressable>
                </View>
              </View>

              <Button
                className="w-full rounded-full"
                buttonColor="#690895"
                textColor="white"
                onPress={handleLogin}
              >
                <Text className="text-xl">Log In</Text>
              </Button>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

export default index;
