import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import MainPageHeader from "../../../components/header/mainPageHeader";
import GuestBookDashboardMainSection from "../../../components/eventDashboard/guestBookDashboardMainSection";
import RsvpDashboardMainSection from "../../../components/eventDashboard/rsvpDashboardMainSection";
import GuestBookTableSection from "../../../components/eventDashboard/guestBookTableSection";
import RsvpTableSection from "../../../components/eventDashboard/rsvpTableSection";
import InputTamuSection from "../../../components/eventDashboard/inputTamuSection";
import SuccessUploadFileModal from "../../../components/eventDashboard/successUploadFileModal";
import LoadingUploadFileModal from "../../../components/eventDashboard/loadingUploadFileModal";
import FailedUploadFileModal from "../../../components/eventDashboard/failedUploadFileModal";

// Sub Menu : Guest Book Main , Guest Book Table , RSVP Main , RSVP Table, Input Tamu

const dummyData = {
  totalConfirmedInvitation: 140,
  checkedIn: 120,
  angpao: 80,
  souvenir: 20,
  totalInvitation: 200,
  confirmed: 140,
  pending: 40,
  declined: 20,
};

const EventDashboard = ({ idEvent }) => {
  console.log(idEvent);
  const [subMenu, setSubMenu] = useState("Guest Book Main");

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [uploadStatus, setUploadStatus] = useState("loading");

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: 30,
              borderRadius: 20,
              width: "80%",
              alignSelf: "center",
            }}
          >
            {uploadStatus === "loading" && <LoadingUploadFileModal />}
            {uploadStatus === "success" && (
              <SuccessUploadFileModal hideModal={hideModal} />
            )}
            {uploadStatus === "failed" && (
              <FailedUploadFileModal
                fileName={"rsvp-error-list.txt"}
                hideModal={hideModal}
              />
            )}
          </Modal>
        </Portal>
        <MainPageHeader title={"Dashboard"} />
        {subMenu === "Guest Book Main" && (
          <GuestBookDashboardMainSection
            subMenu={subMenu}
            setSubMenu={setSubMenu}
            data={dummyData}
          />
        )}
        {subMenu === "RSVP Main" && (
          <RsvpDashboardMainSection
            subMenu={subMenu}
            setSubMenu={setSubMenu}
            data={dummyData}
          />
        )}
        {subMenu === "Guest Book Table" && (
          <GuestBookTableSection subMenu={subMenu} setSubMenu={setSubMenu} />
        )}
        {subMenu === "RSVP Table" && (
          <RsvpTableSection subMenu={subMenu} setSubMenu={setSubMenu} />
        )}
        {subMenu === "Input Tamu" && (
          <InputTamuSection subMenu={subMenu} setSubMenu={setSubMenu} />
        )}
      </PaperProvider>
    </>
  );
};

export default EventDashboard;
