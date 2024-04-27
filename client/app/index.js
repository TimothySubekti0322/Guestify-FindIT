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

// import React, { useState } from "react";
// import { Stack } from "expo-router";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { ImageBackground, View, Text, Image, ToastAndroid } from "react-native";
// import { TextInput } from "react-native-paper";
// import Button from "../components/button/button";

// const initialFormData = {
//   name: "",
//   password: "",
//   confirmPassword: "",
// };

// const Profile = () => {
//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const [passwordVisibility, setPasswordVisibility] = useState(false);
//   const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
//     useState(false);

//   const editProfileHandler = () => {
//     ToastAndroid.show("Profile Updated", ToastAndroid.SHORT);
//   };
//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <KeyboardAwareScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={{ backgroundColor: "#FFFFFF", flexGrow: 1 }}
//       >
//         <ImageBackground
//           source={require("../assets/event/header-background.png")}
//           resizeMode="contain"
//           style={{
//             width: "100%",
//             height: 160,
//           }}
//         >
//           <View className="items-center justify-center w-full h-full">
//             <Text
//               className="text-2xl text-white"
//               style={{ fontFamily: "Inter-SemiBold" }}
//             >
//               Profile
//             </Text>
//           </View>
//         </ImageBackground>
//         {/* Content */}
//         <View
//           className="bg-[#F7F7F7] relative pt-16 pb-12 px-8"
//           style={{ flex: 1 }}
//         >
//           <View className="absolute items-center self-center justify-center rounded-xl z-1 -top-12">
//             <Image
//               source={require("../assets/profile/avatar.png")}
//               style={{ resizeMode: "contain" }}
//             />
//             <Text
//               className="mt-4 text-xl"
//               style={{ fontFamily: "Inter-SemiBold" }}
//             >
//               Bobby Richman
//             </Text>
//           </View>

//           {/* Input */}
//           <TextInput
//             theme={{ roundness: 40 }}
//             className="bg-[#F4F4F4] outline-0 w-full mt-16"
//             mode="outlined"
//             placeholder="Username"
//             left={<TextInput.Icon icon={require("../assets/login/user.png")} />}
//             style={{ borderRadius: 100 }}
//             value={formData.name}
//             onChangeText={(text) => handleChange("name", text)}
//           />
//           <TextInput
//             theme={{ roundness: 40 }}
//             className="bg-[#F4F4F4] outline-0 w-full mt-6"
//             mode="outlined"
//             placeholder="Kata Sandi"
//             secureTextEntry={!passwordVisibility}
//             left={<TextInput.Icon icon={require("../assets/login/lock.png")} />}
//             right={
//               passwordVisibility ? (
//                 <TextInput.Icon
//                   icon={require("../assets/login/eye-open.png")}
//                   onPress={() => setPasswordVisibility(!passwordVisibility)}
//                 />
//               ) : (
//                 <TextInput.Icon
//                   icon={require("../assets/login/eye-closed.png")}
//                   onPress={() => setPasswordVisibility(!passwordVisibility)}
//                 />
//               )
//             }
//             style={{ borderRadius: 100 }}
//             value={formData.password}
//             onChangeText={(text) => handleChange("password", text)}
//           />
//           <TextInput
//             theme={{ roundness: 40 }}
//             className="bg-[#F4F4F4] outline-0 w-full mt-6"
//             mode="outlined"
//             placeholder="Konfirmasi Kata Sandi"
//             secureTextEntry={!confirmPasswordVisibility}
//             left={<TextInput.Icon icon={require("../assets/login/lock.png")} />}
//             right={
//               confirmPasswordVisibility ? (
//                 <TextInput.Icon
//                   icon={require("../assets/login/eye-open.png")}
//                   onPress={() =>
//                     setConfirmPasswordVisibility(!confirmPasswordVisibility)
//                   }
//                 />
//               ) : (
//                 <TextInput.Icon
//                   icon={require("../assets/login/eye-closed.png")}
//                   onPress={() =>
//                     setConfirmPasswordVisibility(!confirmPasswordVisibility)
//                   }
//                 />
//               )
//             }
//             style={{ borderRadius: 100 }}
//             value={formData.confirmPassword}
//             onChangeText={(text) => handleChange("confirmPassword", text)}
//           />
//         </View>
//         <View className="absolute left-0 right-0 items-center px-8 bottom-12">
//           <Button title="Edit Profile" handlePress={editProfileHandler} />
//         </View>
//       </KeyboardAwareScrollView>
//     </>
//   );
// };

// export default Profile;
