import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  Text,
  View,
  Keyboard,
  Alert,
} from "react-native";
import { Stack, router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Checkbox, ActivityIndicator } from "react-native-paper";
import AuthTextInput from "../../../components/auth/authTextInput";
import AuthImage from "../../../static/image/auth";
import AuthPasswordInput from "../../../components/auth/authPasswordInput";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../static/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialForm = {
  email: "",
  password: "",
};

const index = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  // Form state
  const [form, setForm] = useState(initialForm);

  // Handle form change
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  // Error
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // remember me
  const [rememberMe, setRememberMe] = useState(false);

  // loading
  const [loading, setLoading] = useState(false);

  // Submit Validation
  const isDataValid = () => {
    let dataValid = true;
    if (form.email === "") {
      setEmailError("Email tidak boleh kosong");
      dataValid = false;
    } else {
      setEmailError("");
    }
    if (form.password === "") {
      setPasswordError("Password tidak boleh kosong");
      dataValid = false;
    } else {
      setPasswordError("");
    }
    return dataValid;
  };

  // handle form submit
  const handleLogin = async () => {
    Keyboard.dismiss();

    // Axios request
    if (isDataValid()) {
      setLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, form);

        if (response.data.message == "User not found") {
          setLoading(false);
          setEmailError("Email tidak ditemukan");
        } else if (response.data.message == "Wrong Password") {
          setLoading(false);
          setPasswordError("Password salah");
        } else {
          await AsyncStorage.setItem("token", response.data.token);
          await AsyncStorage.setItem(
            "userData",
            JSON.stringify(response.data.payload)
          );
          if (rememberMe) {
            await AsyncStorage.setItem("rememberMe", "true");
          }
          setForm(initialForm);
          setEmailError("");
          setPasswordError("");
          setLoading(false);
          router.replace({ pathname: "../layout", params: { screen: "home" } });
        }
      } catch (error) {
        setLoading(false);
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
                  className="text-3xl text-[#690895] mb-4"
                  style={{ fontFamily: "Inter-Bold" }}
                >
                  Login
                </Text>
                <AuthTextInput
                  placeholder={"Email"}
                  handleChange={handleChange}
                  name={"email"}
                  icon={AuthImage.user}
                  error={emailError}
                />
                <AuthPasswordInput
                  placeholder={"Kata Sandi"}
                  passwordVisibility={passwordVisibility}
                  setPasswordVisibility={setPasswordVisibility}
                  handleChange={handleChange}
                  name={"password"}
                  error={passwordError}
                />
                <View className="flex-row items-center self-start mt-4">
                  <Checkbox
                    status={rememberMe ? "checked" : "unchecked"}
                    onPress={() => setRememberMe(!rememberMe)}
                  />
                  <Text>Remember me</Text>
                </View>

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
                onPress={() => handleLogin()}
              >
                {loading ? (
                  <ActivityIndicator color="white" size={20} />
                ) : (
                  <Text className="text-xl">Log In</Text>
                )}
              </Button>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

export default index;
