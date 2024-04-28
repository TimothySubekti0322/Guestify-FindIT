import { CameraView, useCameraPermissions } from "expo-camera/next";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import WhiteFrame from "./whiteFrame";
import Button from "../button/button";

const CameraModule = ({
  handleScanned,
  flash,
  handleTorch,
  width,
  setCameraLoading,
}) => {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View className="items-center justify-center" style={{ flex: 1 }}>
        <Text className="">We need your permission to show the camera</Text>
        <Button handlePress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View
      className="bg-[#555555] overflow-hidden mt-16"
      style={{ flex: 1, borderRadius: 40 }}
    >
      <CameraView
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={(data) => handleScanned(data.data)}
        flash="on"
      >
        <View className="w-full h-full">
          <View className="absolute top-0 bottom-0 left-0 right-0 z-0 items-center justify-center w-full h-full bg-black opacity-40">
            <View className="overflow-hidden" style={{ borderRadius: 20 }}>
              <CameraView
                style={{ width: width * 0.5, height: width * 0.5 }}
                facing="back"
                flash="on"
                onCameraReady={() => setCameraLoading(false)}
              ></CameraView>
            </View>
          </View>
        </View>
      </CameraView>

      {/* Text Title */}
      <Text
        className="absolute left-0 right-0 w-full text-lg text-center text-white top-6"
        style={{ fontFamily: "Inter-Regular", fontSize: 15 }}
      >
        Arahkan kameranya ke QR Code
      </Text>
      {/* White Border Frame */}
      <WhiteFrame width={width} />

      {/* Flash */}
      <Pressable
        className="absolute left-0 right-0 flex-row items-center justify-center w-full text-white bottom-6"
        onPress={() => handleTorch()}
      >
        <Image
          source={require("../../assets/scanner/lighting.png")}
          className="w-8 h-8"
          style={{ resizeMode: "contain" }}
        />
        <Text
          className="ml-1 text-white"
          style={{ fontFamily: "Inter-Regular", fontSize: 15 }}
        >
          {flash ? "Matikan" : "Nyalakan"} Flash
        </Text>
      </Pressable>
    </View>
  );
};

export default CameraModule;
