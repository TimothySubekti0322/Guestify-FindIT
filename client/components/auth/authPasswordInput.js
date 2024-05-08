import { TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import React from "react";
import AuthImage from "../../static/image/auth";

const AuthPasswordInput = ({
  placeholder,
  passwordVisibility,
  setPasswordVisibility,
  handleChange,
  name,
  error,
}) => {
  return (
    <View className="w-full flex-start">
      <TextInput
        autoCapitalize="none"
        theme={{ roundness: 40 }}
        error={error !== ""}
        className="bg-[#F4F4F4] outline-0 w-full mt-6"
        mode="outlined"
        placeholder={placeholder}
        secureTextEntry={!passwordVisibility}
        left={<TextInput.Icon icon={AuthImage.lock} />}
        right={
          passwordVisibility ? (
            <TextInput.Icon
              forceTextInputFocus={false}
              icon={AuthImage.eyeOpen}
              onPress={() => setPasswordVisibility(!passwordVisibility)}
            />
          ) : (
            <TextInput.Icon
              forceTextInputFocus={false}
              icon={AuthImage.eyeClosed}
              onPress={() => setPasswordVisibility(!passwordVisibility)}
            />
          )
        }
        style={{ borderRadius: 100 }}
        onChangeText={(text) => handleChange(name, text)}
      />
      {error !== "" && (
        <Text className="text-[#ED4C4D] mt-1 ml-2 -mb-2">{error}</Text>
      )}
    </View>
  );
};

export default AuthPasswordInput;
