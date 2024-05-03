import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import GuestTableChip from "./guestTableChip";

const GuestBookTable = ({ data }) => {
  return (
    <ScrollView
      horizontal={true}
      style={{ marginTop: 20 }}
      showsHorizontalScrollIndicator={false}
    >
      <View className="mx-8" style={{ height: 440 }}>
        {/* Table Head */}
        <View className="flex-row bg-[#690895] h-10 rounded-t-lg items-center">
          <Text className="w-24 pl-4 text-white ">No</Text>
          <Pressable
            className="w-44"
            onPress={() => console.log("Sort by Guest Name")}
          >
            <Text className="text-white">Guest Name</Text>
          </Pressable>
          <Text className="text-white w-36">Phone Number</Text>
          <Text className="text-center text-white w-28">Check-in</Text>
          <Text className="text-center text-white w-28">Gift</Text>
          <Text className="text-center text-white w-28">Souvenir</Text>
          <Text className="text-center text-white w-36">Total Guest</Text>
        </View>

        {/* Table Row */}
        {data.map((item, index) => (
          <View
            key={item.no}
            className={`${
              index % 2 == 0 ? "bg-white" : "bg-[#eff4fc]"
            } flex-row items-center h-10 `}
          >
            <Text className="w-24 pl-4 text-[#31013F]">{item.no}</Text>
            <Text className="text-[#31013F] w-44">{item.guestName}</Text>
            <Text className="black w-36">{item.phoneNumber}</Text>
            <View className="w-28 items-center text-[#31013F]">
              <GuestTableChip value={item.checkIn} />
            </View>
            <View className="w-28 items-center text-[#31013F]">
              <GuestTableChip value={item.gift} />
            </View>
            <View className="w-28 items-center text-[#31013F]">
              <GuestTableChip value={item.souvenir} />
            </View>
            <Text className="text-center text-[#31013F] w-36">
              {item.totalGuest}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default GuestBookTable;
