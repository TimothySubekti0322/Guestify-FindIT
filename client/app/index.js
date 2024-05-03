import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";
import { Stack, router } from "expo-router";
import { Button } from "react-native-paper";

const App = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View className="items-center justify-center" style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/getting-started/splash-screen-background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View className="px-[10%]">
            <Text
              className="text-4xl text-white"
              style={{ fontFamily: "Roca-Two-Black-Italic" }}
            >
              Guestify.
            </Text>
            <Text
              className="mt-6 text-lg text-white"
              style={{ fontFamily: "Manrope-Regular", fontSize: 16 }}
            >
              Membantu Anda merencanakan, mengatur, dan mempersonalisasikan
              seluruh acara Anda!
            </Text>
            <View>
              <Button
                buttonColor="white"
                textColor="#690895"
                labelStyle={{ fontFamily: "Manrope-Bold" }}
                className="w-1/2 mt-6"
                icon={{ source: "arrow-right", direction: "right" }}
                contentStyle={{ flexDirection: "row-reverse" }}
                mode="contained"
                onPress={() => router.push("/login")}
              >
                <Text style={{ fontSize: 16, fontFamily: "Manrope-Bold" }}>
                  Get Started
                </Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default App;

// import { View, Text, Pressable, ScrollView, Image } from "react-native";
// import { Modal, Portal, PaperProvider } from "react-native-paper";
// import React, { useState } from "react";
// import { Stack } from "expo-router";
// import MainPageHeader from "../components/header/mainPageHeader";
// import { StatusBar } from "expo-status-bar";
// import Navbar from "../components/navbar/navbar";
// import GuestBookDashboardMainSection from "../components/eventDashboard/guestBookDashboardMainSection";
// import RsvpDashboardMainSection from "../components/eventDashboard/rsvpDashboardMainSection";
// import GuestBookTableSection from "../components/eventDashboard/guestBookTableSection";
// import RsvpTableSection from "../components/eventDashboard/rsvpTableSection";
// import InputTamuSection from "../components/eventDashboard/inputTamuSection";
// import SuccessUploadFileModal from "../components/eventDashboard/successUploadFileModal";
// import LoadingUploadFileModal from "../components/eventDashboard/loadingUploadFileModal";
// import FailedUploadFileModal from "../components/eventDashboard/failedUploadFileModal";

// // Sub Menu : Guest Book Main , Guest Book Table , RSVP Main , RSVP Table, Input Tamu

// const dummyData = {
//   totalConfirmedInvitation: 140,
//   checkedIn: 120,
//   angpao: 80,
//   souvenir: 20,
//   totalInvitation: 200,
//   confirmed: 140,
//   pending: 40,
//   declined: 20,
// };

// const EventDashboard = () => {
//   const [subMenu, setSubMenu] = useState("Guest Book Main");

//   const [visible, setVisible] = useState(true);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);

//   const [uploadStatus, setUploadStatus] = useState("failed");

//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <StatusBar style="light" />
//       <PaperProvider>
//         <Portal>
//           <Modal
//             visible={visible}
//             onDismiss={hideModal}
//             contentContainerStyle={{
//               backgroundColor: "white",
//               padding: 30,
//               borderRadius: 20,
//               width: "80%",
//               alignSelf: "center",
//             }}
//           >
//             {uploadStatus === "loading" && <LoadingUploadFileModal />}
//             {uploadStatus === "success" && (
//               <SuccessUploadFileModal hideModal={hideModal} />
//             )}
//             {uploadStatus === "failed" && (
//               <FailedUploadFileModal
//                 fileName={"rsvp-error-list.txt"}
//                 hideModal={hideModal}
//               />
//             )}
//           </Modal>
//         </Portal>
//         <MainPageHeader title={"Dashboard"} />
//         {subMenu === "Guest Book Main" && (
//           <GuestBookDashboardMainSection
//             subMenu={subMenu}
//             setSubMenu={setSubMenu}
//             data={dummyData}
//           />
//         )}
//         {subMenu === "RSVP Main" && (
//           <RsvpDashboardMainSection
//             subMenu={subMenu}
//             setSubMenu={setSubMenu}
//             data={dummyData}
//           />
//         )}
//         {subMenu === "Guest Book Table" && (
//           <GuestBookTableSection subMenu={subMenu} setSubMenu={setSubMenu} />
//         )}
//         {subMenu === "RSVP Table" && (
//           <RsvpTableSection subMenu={subMenu} setSubMenu={setSubMenu} />
//         )}
//         {subMenu === "Input Tamu" && (
//           <InputTamuSection subMenu={subMenu} setSubMenu={setSubMenu} />
//         )}
//       </PaperProvider>

//       <Navbar page={"dashboard"} />
//     </>
//   );
// };

// export default EventDashboard;
