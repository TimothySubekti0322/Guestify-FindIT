import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import TableChip from "./guestTableChip";
import RsvpTableChip from "./rsvpTableChip";
import QrCodeLinkButton from "./qrCodeLinkButton";

const RsvpTable = ({ data }) => {
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
          <Text className="text-white w-60">Email</Text>
          <Text className="w-40 text-center text-white">RSVP Status</Text>
          <Text className="text-center text-white w-36">QR Code Link</Text>
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
            <Text className="text-[#31013F] w-60">{item.email}</Text>
            <View className="w-40 items-center text-[#31013F]">
              <RsvpTableChip value={item.rsvpStatus} />
            </View>
            <View className="items-center justify-center w-36">
              <QrCodeLinkButton link={item.qrCodeLink} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RsvpTable;
