import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <View className="items-center justify-center" style={{ flex: 1 }}>
      <Text>Another Page of RSVP, try this</Text>
      <Pressable
        className="py-3 mt-5 mx-auto bg-blue-700 rounded-sm w-[80%]"
        onPress={() => router.back()}
      >
        <Text className="text-white">Balik ke event</Text>
      </Pressable>
    </View>
  );
};

export default index;
