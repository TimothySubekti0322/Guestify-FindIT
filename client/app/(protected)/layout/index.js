import { Stack, useLocalSearchParams } from "expo-router";
import Navbar from "../../../components/navbar/navbar";
import React, { useState } from "react";
import Home from "../home";
import Event from "../event";
import Profile from "../profile";
import Scanner from "../scanner";

const Index = () => {
  const { screen = "home" } = useLocalSearchParams();
  const [page, setPage] = useState(screen);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      {page == "home" && <Home setPage={setPage} />}
      {page == "event" && <Event setPage={setPage} />}
      {page == "profile" && <Profile />}
      {page == "scanner" && <Scanner />}
      <Navbar page={page} setPage={setPage} />
    </>
  );
};

export default Index;
