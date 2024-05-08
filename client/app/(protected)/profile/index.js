import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EditComponent from "../../../components/profile/editComponent";
import MainComponent from "../../../components/profile/mainComponent";
import Navbar from "../../../components/navbar/navbar";
import ComingSoonComponent from "../../../components/comingSoon/comingSoonComponent";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchName = async () => {
      const userData = await AsyncStorage.getItem("userData");
      const name = JSON.parse(userData).name;
      setName(name);
    };
    fetchName();
    setLoading(false);
  });
  const [screen, setScreen] = useState("main");
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style={screen == "comingSoon" ? "dark" : "light"} />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ backgroundColor: "#FFFFFF", flexGrow: 1 }}
      >
        {screen == "edit" && !loading && <EditComponent name={name} />}
        {screen == "main" && !loading && (
          <MainComponent setScreen={setScreen} name={name} />
        )}
        {screen == "comingSoon" && !loading && (
          <ComingSoonComponent
            title="Kembali ke Profile"
            pressHandler={() => setScreen("main")}
          />
        )}
      </KeyboardAwareScrollView>
    </>
  );
};

export default Profile;
