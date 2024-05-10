import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
  ScrollView,
  Alert,
  ToastAndroid,
} from "react-native";
import { Stack, router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { useState } from "react";
import AuthTextInput from "../../../components/auth/authTextInput";
import AuthImage from "../../../static/image/auth";
import AuthPasswordInput from "../../../components/auth/authPasswordInput";
import axios from "axios";
import BASE_URL from "../../../static/API";
import { isValidEmail } from "../../../utils/validator";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  // Toggle password visibility
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  // Form state
  const [form, setForm] = useState(initialForm);

  // Handle form change
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  // Error
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);

  // Submit Validation
  const isDataValid = () => {
    let dataValid = true;
    if (form.name === "") {
      setNameError("Nama tidak boleh kosong");
      dataValid = false;
    } else {
      setNameError("");
    }
    if (form.email === "") {
      setEmailError("Email tidak boleh kosong");
      dataValid = false;
    } else if (!isValidEmail(form.email)) {
      setEmailError("Email tidak valid");
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
    if (form.confirmPassword === "") {
      setConfirmPasswordError("Konfirmasi password tidak boleh kosong");
      dataValid = false;
    } else if (form.password !== form.confirmPassword) {
      setConfirmPasswordError("Password tidak sama");
      dataValid = false;
    } else {
      setConfirmPasswordError("");
    }
    return dataValid;
  };

  // Handle form submit
  const handleSubmit = async () => {
    Keyboard.dismiss();

    // Axios request
    if (isDataValid()) {
      try {
        setLoading(true);
        const response = await axios.post(`${BASE_URL}/auth/signup`, form);
        if (response.data.message == "User already exists") {
          setLoading(false);
          setEmailError("Email sudah terdaftar");
        } else if (response.data.message == "success") {
          ToastAndroid.show("Berhasil mendaftar ✅", ToastAndroid.SHORT);
          setForm(initialForm);
          setEmailError("");
          setPasswordError("");
          setNameError("");
          setConfirmPasswordError("");
          setLoading(false);
          router.replace("../login");
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
              className="bg-white rounded-t-[50px] w-full px-8"
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "space-between",
              }}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              <View className="mt-10">
                <View className="items-center w-full">
                  <Text
                    className="text-3xl text-[#690895] mb-4"
                    style={{ fontFamily: "Inter-Bold" }}
                  >
                    Sign Up
                  </Text>
                  <AuthTextInput
                    placeholder={"Nama"}
                    handleChange={handleChange}
                    name={"name"}
                    icon={AuthImage.name}
                    error={nameError}
                  />
                  <AuthTextInput
                    placeholder={"Email"}
                    handleChange={handleChange}
                    name={"email"}
                    icon={AuthImage.email}
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
                  <AuthPasswordInput
                    placeholder={"Konfirmasi Kata Sandi"}
                    passwordVisibility={confirmPasswordVisibility}
                    setPasswordVisibility={setConfirmPasswordVisibility}
                    handleChange={handleChange}
                    name={"confirmPassword"}
                    error={confirmPasswordError}
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
                className="mb-10"
                buttonColor="#690895"
                textColor="white"
                onPress={() => handleSubmit()}
              >
                {loading ? (
                  <ActivityIndicator color="white" size={20} />
                ) : (
                  <Text className="text-xl">Sign Up</Text>
                )}
              </Button>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

export default Signup;
