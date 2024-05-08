import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import EventDashboardImage from "../../static/image/eventDashboard";
import EventDashboardCard from "./eventDashboardCard";
import SubMenu from "./subMenu";
import { getPercentage } from "../../utils/numberFormater";

const RsvpDashboardMainSection = ({ subMenu, data, setSubMenu }) => {
  const rsvpPax = data.totalRsvpPax + " pax";
  const menungguPercentage = getPercentage(
    data.totalPending,
    data.listGuest.length
  );
  const ditolakPercentage = getPercentage(
    data.totalDeclined,
    data.listGuest.length
  );
  return (
    <View className="relative bg-[#F7F7F7] px-8 pt-10" style={{ flex: 1 }}>
      {/* SubMenu */}
      <SubMenu subMenu={subMenu} setSubMenu={setSubMenu} />
      <ScrollView style={{ flex: 1 }}>
        <Text
          className="text-[#6D6D6D] text-lg"
          style={{ fontFamily: "Inter-Medium" }}
        >
          Total Undangan
        </Text>
        <View className="flex-row items-end mb-6 gap-x-2">
          <Text
            className="p-0 mt-3 text-4xl"
            style={{ fontFamily: "Inter-SemiBold" }}
          >
            {data.listGuest.length}
          </Text>
          <Text className="pb-1" style={{ fontFamily: "Inter-Medium" }}>
            undangan
          </Text>
        </View>
        {/* Event Dashboard Card */}
        <EventDashboardCard
          cardBackground="#EFFDED"
          iconBackground="#E3EEE2"
          image={EventDashboardImage.userConfirmed}
          title="Datang"
          numberColor="#3EC04B"
          registered={data.totalConfirmed}
          total={data.listGuest.length}
          detail={rsvpPax}
        />
        <EventDashboardCard
          cardBackground="#FFF7EF"
          iconBackground="#FBE8D7"
          image={EventDashboardImage.userPending}
          title="Menunggu"
          numberColor="#E9A400"
          registered={data.totalPending}
          total={data.listGuest.length}
          detail={menungguPercentage}
        />
        <EventDashboardCard
          cardBackground="#FFF6F4"
          iconBackground="#FBEAE6"
          image={EventDashboardImage.userDeclined}
          title="Ditolak"
          numberColor="#ED4C4D"
          registered={data.totalDeclined}
          total={data.listGuest.length}
          detail={ditolakPercentage}
        />
        <View className="w-full rounded-full bg-[#E9A400] overflow-hidden mt-6">
          <Pressable
            className="items-center py-4"
            android_ripple={{ color: "#C78200" }}
            onPress={() => setSubMenu("RSVP Table")}
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

export default RsvpDashboardMainSection;
