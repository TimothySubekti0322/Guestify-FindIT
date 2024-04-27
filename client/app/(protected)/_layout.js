import React from "react";
import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </>
  );
};

export default ProtectedLayout;
