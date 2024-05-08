import { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { Stack, router } from "expo-router";
import Button from "../../../components/button/button";
import MainPageHeader from "../../../components/header/mainPageHeader";
import CameraModule from "../../../components/scanner/cameraModule";
import InputField from "../../../components/inputField/inputField";
import {
  PaperProvider,
  Portal,
  Modal,
  ActivityIndicator,
} from "react-native-paper";
import LoadingModal from "../../../components/scanner/loadingModal";
import QrErrorModal from "../../../components/scanner/qrErrorModal";
import SubmitErrorModal from "../../../components/scanner/submitErrorModal";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../../../static/API";

const Scanner = () => {
  const [screen, setScreen] = useState("scan");
  const [data, setData] = useState("");
  const [flash, setFlash] = useState(false);

  // Modal
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // Loading
  const [loading, setLoading] = useState(false);
  const [qrError, setQrError] = useState("");
  const [submitError, setSubmitError] = useState("");

  // Camera Loading
  const [cameraLoading, setCameraLoading] = useState(true);

  const handleTorch = async () => {
    setFlash(!flash);
  };

  // Data
  const [formData, setFormData] = useState({
    kodeUndangan: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Dimensions
  const width = Dimensions.get("window").width;
  const padding = width * 0.09;

  const handleScanned = async (data) => {
    setLoading(true);
    showModal();
    try {
      // Fetch Data here
      console.log(data);
      // Check if the data was a right API
      if (!data.includes(`${BASE_URL}/checkIn/checkRSVP`)) {
        setLoading(false);
        setQrError(true);
        return;
      }
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      if (response.data.message == "success") {
        setTimeout(() => {
          hideModal();
        }, 10);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setTimeout(() => {
          router.push({
            pathname: "./scanner/guestConfirmation",
            params: {
              eventId: response.data.data.eventId,
              email: response.data.data.email,
              eventName: response.data.data.eventName,
              name: response.data.data.name,
            },
          });
        }, 600);
      }
      if (response.data.message == "Event Code not found") {
        setLoading(false);
        setQrError(true);
      }
    } catch (error) {
      setLoading(false);
      setQrError(true);
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    showModal();
    try {
      // Fetch Data here
      console.log(formData);
      setTimeout(() => {
        setLoading(false);
        hideModal();
        router.push({
          pathname: "./scanner/guestConfirmation",
          params: {
            eventId: formData.eventId,
            email: formData.email,
            eventName: response.data.data.eventName,
            name: response.data.data.name,
          },
        });
      }, 2000);
    } catch (error) {
      setSubmitError(true);
      console.log(error);
    }
  };

  const handleRetry = () => {
    hideModal();
    setQrError(false);
    setData("");
  };

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
            {loading && <LoadingModal />}
            {qrError && (
              <QrErrorModal handleRetry={handleRetry} setScreen={setScreen} />
            )}
            {submitError && (
              <SubmitErrorModal
                hideModal={hideModal}
                setSubmitError={setSubmitError}
              />
            )}
          </Modal>
        </Portal>
        <MainPageHeader title={"Scanner"} />
        <View
          className="relative bg-[#F7F7F7]"
          style={{ flex: 1, paddingHorizontal: padding }}
        >
          <View className="absolute flex-row items-center self-center justify-center h-16 px-6 bg-white rounded-xl z-1 -top-8">
            <Text
              className="text-[#6D6D6D]"
              style={{ fontFamily: "Manrope-SemiBold" }}
            >
              Scan QR Code untuk ikuti acaramu!
            </Text>
          </View>
          {screen == "scan" && (
            <>
              <CameraModule
                handleScanned={handleScanned}
                flash={flash}
                handleTorch={handleTorch}
                width={width}
                cameraLoading={cameraLoading}
                setCameraLoading={setCameraLoading}
                loading={loading}
              />
              {cameraLoading ? (
                <View
                  className="items-center justify-center"
                  style={{ flex: 1 }}
                >
                  <ActivityIndicator
                    animating={true}
                    color="#690895"
                    size="large"
                  />
                  <Text className="mt-2 text-xl font-bold">Loading ...</Text>
                </View>
              ) : (
                <>
                  <Text
                    className="mt-8 text-center"
                    style={{ fontFamily: "Inter-Regular" }}
                  >
                    atau ketik kode secara manual
                  </Text>
                  <View className="mb-2 -mt-4">
                    <Button
                      handlePress={() => setScreen("manual")}
                      title="Masukan Kode"
                    />
                  </View>
                </>
              )}
            </>
          )}
          {screen == "manual" && (
            <View className="justify-between pt-16 pb-8" style={{ flex: 1 }}>
              <View>
                <InputField
                  title="Kode Undangan"
                  placeholder="Masukan Kode Undangan Acara"
                  name="kodeUndangan"
                  handleChange={handleChange}
                  type="text"
                />
              </View>
              <View>
                <Button handlePress={() => handleSubmit()} title="Lanjutkan" />
              </View>
            </View>
          )}
        </View>
      </PaperProvider>
    </>
  );
};

export default Scanner;
