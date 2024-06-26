import { Text, TextInput } from "react-native";
import React from "react";

const TextInputRsvp = ({ title, placeholder, name, handleChange, type }) => {
  return (
    <>
      <Text className="text-[#690895]" style={{ fontFamily: "Manrope-Bold" }}>
        {title}
      </Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={type == "number" ? "numeric" : "default"}
        className="bg-[#F1F1F1] p-3 rounded-xl mt-2 mb-4"
        onChangeText={(text) => handleChange(name, text)}
      />
    </>
  );
};

export default TextInputRsvp;
