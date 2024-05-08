import React from "react";
import { Stack } from "expo-router";
import CreateEventContextProvider from "../../../../store/context/createEventContext";

const CreateEventLayout = () => {
  return (
    <CreateEventContextProvider>
      <>
        <Stack.Screen options={{ headerShown: false }} />
        <Stack />
      </>
    </CreateEventContextProvider>
  );
};

export default CreateEventLayout;
