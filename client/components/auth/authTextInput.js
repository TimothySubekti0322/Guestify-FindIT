import { TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import React from "react";

const AuthTextInput = ({ placeholder, handleChange, name, icon, error }) => {
  return (
    <View className="w-full flex-start">
      <TextInput
        autoCapitalize="none"
        theme={{ roundness: 40 }}
        error={error !== ""}
        className={`bg-[#F4F4F4] outline-0 w-full mt-6`}
        mode="outlined"
        placeholder={placeholder}
        left={<TextInput.Icon icon={icon} />}
        style={{ borderRadius: 100 }}
        onChangeText={(text) => handleChange(name, text)}
      />
      {error !== "" && (
        <Text className="text-[#ED4C4D] mt-1 ml-2 -mb-2">{error}</Text>
      )}
    </View>
  );
};

export default AuthTextInput;
