import { View, Text, ImageBackground, ToastAndroid, Image } from "react-native";
import React, { useState } from "react";
import AuthTextInput from "../auth/authTextInput";
import AuthPasswordInput from "../auth/authPasswordInput";
import AuthImage from "../../static/image/auth";
import Button from "../button/button";

const initialFormData = {
  name: "",
  password: "",
  confirmPassword: "",
};

const EditComponent = ({ name }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  // Error
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const editProfileHandler = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Password tidak sama");
      setConfirmPasswordError("Password tidak sama");
      return;
    }
    ToastAndroid.show("Profile Updated", ToastAndroid.SHORT);
  };
  return (
    <>
      <ImageBackground
        source={require("../../assets/event/header-background.png")}
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
            Profile
          </Text>
        </View>
      </ImageBackground>
      {/* Content */}
      <View
        className="bg-[#F7F7F7] relative pt-24 pb-12 px-8"
        style={{ flex: 1 }}
      >
        <View className="absolute items-center self-center justify-center rounded-xl z-1 -top-12">
          <Image
            source={require("../../assets/profile/avatar.png")}
            style={{ resizeMode: "contain" }}
          />
          <Text
            className="mt-4 text-xl"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            {name}
          </Text>
        </View>

        {/* Input */}
        <AuthTextInput
          placeholder="Username"
          handleChange={handleChange}
          name="name"
          icon={AuthImage.user}
          error=""
        />
        <AuthPasswordInput
          placeholder={"Kata Sandi"}
          handleChange={handleChange}
          name={"password"}
          passwordVisibility={passwordVisibility}
          setPasswordVisibility={setPasswordVisibility}
          icon={AuthImage.lock}
          error={passwordError}
        />
        <AuthPasswordInput
          placeholder={"Konfirmasi Kata Sandi"}
          handleChange={handleChange}
          name={"confirmPassword"}
          passwordVisibility={confirmPasswordVisibility}
          setPasswordVisibility={setConfirmPasswordVisibility}
          icon={AuthImage.lock}
          error={confirmPasswordError}
        />
      </View>
      <View className="px-8 pb-8 bg-[#F7F7F7]">
        <Button title="Edit Profile" handlePress={() => editProfileHandler()} />
      </View>
    </>
  );
};

export default EditComponent;
