import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import EventDashboardImage from "../../static/image/eventDashboard";
import EventDashboardCard from "./eventDashboardCard";
import SubMenu from "./subMenu";

const GuestBookDashboardMainSection = ({ subMenu, setSubMenu, data }) => {
  return (
    <View className="relative bg-[#F7F7F7] px-8 pt-10" style={{ flex: 1 }}>
      {/* SubMenu */}
      <SubMenu subMenu={subMenu} setSubMenu={setSubMenu} />
      <ScrollView style={{ flex: 1 }}>
        <Text
          className="text-[#6D6D6D] text-lg"
          style={{ fontFamily: "Inter-Medium" }}
        >
          Total Undangan Datang
        </Text>
        <View className="flex-row items-end mb-6 gap-x-2">
          <Text
            className="p-0 mt-3 text-4xl"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            {data.totalConfirmedInvitation}
          </Text>
          <Text className="pb-1" style={{ fontFamily: "Inter-Medium" }}>
            undangan
          </Text>
        </View>
        {/* Event Dashboard Card */}
        <EventDashboardCard
          cardBackground="#FBEFFC"
          iconBackground="#F3D8F5"
          image={EventDashboardImage.qrCode}
          title="Checked In"
          numberColor="#690895"
          registered={data.checkedIn}
          total={data.totalConfirmedInvitation}
          detail="192 pax"
        />
        <EventDashboardCard
          cardBackground="#FFF7EF"
          iconBackground="#FBE8D7"
          image={EventDashboardImage.money}
          title="Angpao"
          numberColor="#E9A400"
          registered={data.angpao}
          total={data.checkedIn}
          detail="67.00 %"
        />
        <EventDashboardCard
          cardBackground="#FFF7EF"
          iconBackground="#FBE8D7"
          image={EventDashboardImage.gift}
          title="Souvenir"
          numberColor="#E9A400"
          registered={data.souvenir}
          total={data.checkedIn}
          detail="17.00 %"
        />
        <View className="w-full rounded-full bg-[#E9A400] overflow-hidden mt-6">
          <Pressable
            className="items-center py-4"
            android_ripple={{ color: "#C78200" }}
            onPress={() => setSubMenu("Guest Book Table")}
          >
            <Text
              className="text-white "
              style={{ fontFamily: "Manrope-Bold", fontSize: 16 }}
            >
              Lihat Detail
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default GuestBookDashboardMainSection;
