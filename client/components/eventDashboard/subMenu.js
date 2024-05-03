import { View, Text, Pressable } from "react-native";
import React from "react";

const SubMenu = ({ subMenu, setSubMenu }) => {
  return (
    <View className="absolute flex-row items-center self-center justify-center h-12 px-2 bg-white rounded-full z-1 -top-6">
      <Pressable
        className={`${
          subMenu == "Input Tamu" && "bg-[#690895]"
        } items-center justify-center h-10 px-4 ml-1 rounded-full`}
        onPress={() => setSubMenu("Input Tamu")}
      >
        <Text
          className={`${
            subMenu == "Input Tamu" ? "text-white" : "text-[#989899]"
          } `}
          style={{ fontSize: 12, fontFamily: "Manrope-Bold" }}
        >
          Input Tamu
        </Text>
      </Pressable>
      <Pressable
        className={`${
          (subMenu == "RSVP Main" || subMenu == "RSVP Table") && "bg-[#690895]"
        } items-center justify-center h-10 px-4 rounded-full`}
        onPress={() => setSubMenu("RSVP Main")}
      >
        <Text
          className={`${
            subMenu == "RSVP Main" || subMenu == "RSVP Table"
              ? "text-white"
              : "text-[#989899]"
          } `}
          style={{ fontSize: 12, fontFamily: "Manrope-Bold" }}
        >
          RSVP Dashboard
        </Text>
      </Pressable>
      <Pressable
        className={`${
          (subMenu == "Guest Book Main" || subMenu == "Guest Book Table") &&
          "bg-[#690895]"
        } rounded-full h-10 items-center justify-center px-4 mr-1`}
        onPress={() => setSubMenu("Guest Book Main")}
      >
        <Text
          className={`${
            subMenu == "Guest Book Main" || subMenu == "Guest Book Table"
              ? "text-white"
              : "text-[#989899]"
          } `}
          style={{ fontSize: 12, fontFamily: "Manrope-Bold" }}
        >
          Guest Book
        </Text>
      </Pressable>
    </View>
  );
};

export default SubMenu;
