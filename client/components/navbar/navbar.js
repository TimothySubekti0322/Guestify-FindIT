import { View, Pressable, Image, Text } from "react-native";
import React from "react";

const Navbar = ({ page, setPage }) => {
  return (
    <View className="bottom-0 h-20 bg-[#690895] items-center flex-row justify-between">
      <Pressable className="items-center w-1/5" onPress={() => setPage("home")}>
        {page == "home" ? (
          <Image source={require("../../assets/navbar/home-filled.png")} />
        ) : (
          <Image source={require("../../assets/navbar/home.png")} />
        )}

        <Text
          className={`${page == "home" ? "text-[#E9A400]" : "text-white"} mt-1`}
          style={{ fontFamily: "Manrope-Bold", fontSize: 12 }}
        >
          Home
        </Text>
      </Pressable>

      {/* Event */}
      <Pressable
        className="items-center w-1/5"
        onPress={() => setPage("event")}
      >
        {page == "event" ? (
          <Image source={require("../../assets/navbar/event-filled.png")} />
        ) : (
          <Image source={require("../../assets/navbar/event.png")} />
        )}
        <Text
          className={`${
            page == "event" ? "text-[#E9A400]" : "text-white"
          } mt-1`}
          style={{ fontFamily: "Manrope-Bold", fontSize: 12 }}
        >
          Event
        </Text>
      </Pressable>

      {/* Hidden Element */}
      <Pressable className="items-center invisible w-1/5 opacity-0">
        <Image source={require("../../assets/navbar/event.png")} />
        <Text
          className="mt-1 text-white"
          style={{ fontFamily: "Manrope-Bold", fontSize: 12 }}
        >
          Hidden
        </Text>
      </Pressable>

      {/* Scanner */}
      <View className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center">
        <Pressable
          className="absolute items-center -top-6"
          onPress={() => setPage("scanner")}
        >
          <View className="bg-[#E9A400] rounded-full p-3">
            <Image source={require("../../assets/navbar/scanner.png")} />
          </View>
          <Text
            className="mt-1 text-white"
            style={{ fontFamily: "Manrope-Bold", fontSize: 12 }}
          >
            Scanner
          </Text>
        </Pressable>
      </View>

      {/* Dashboard */}
      <Pressable
        className="items-center w-1/5"
        onPress={() => setPage("dashboard")}
      >
        {page == "dashboard" ? (
          <Image source={require("../../assets/navbar/dashboard-filled.png")} />
        ) : (
          <Image source={require("../../assets/navbar/dashboard.png")} />
        )}
        <Text
          className={`${
            page == "dashboard" ? "text-[#E9A400]" : "text-white"
          } mt-1`}
          style={{ fontFamily: "Manrope-Bold", fontSize: 12 }}
        >
          Dashboard
        </Text>
      </Pressable>

      {/* Profile */}
      <Pressable
        className="items-center w-1/5"
        onPress={() => setPage("profile")}
      >
        {page == "profile" ? (
          <Image source={require("../../assets/navbar/profile-filled.png")} />
        ) : (
          <Image source={require("../../assets/navbar/profile.png")} />
        )}
        <Text
          className={`${
            page == "profile" ? "text-[#E9A400]" : "text-white"
          } mt-1`}
          style={{ fontFamily: "Manrope-Bold", fontSize: 12 }}
        >
          Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default Navbar;
