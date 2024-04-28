import { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { Stack, router } from "expo-router";
import Button from "../../../components/button/button";
import Navbar from "../../../components/navbar/navbar";
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

  // Fetching Camera
  const [cameraLoading, setCameraLoading] = useState(false);

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
      setTimeout(() => {
        setLoading(false);
        hideModal();
        router.push("./guestConfirmation");
      }, 2000);
    } catch (error) {
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
        router.push("./guestConfirmation");
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
          {cameraLoading && (
            <View
              className="items-center justify-center w-full h-full"
              style={{ flex: 1 }}
            >
              <ActivityIndicator animating={true} color="#690895" size={30} />
              <Text
                className="mt-6 text-lg"
                style={{ fontFamily: "Manrope-SemiBold" }}
              >
                Loading...
              </Text>
            </View>
          )}
          {screen == "scan" && !cameraLoading && (
            <>
              <CameraModule
                handleScanned={handleScanned}
                flash={flash}
                handleTorch={handleTorch}
                width={width}
                setCameraLoading={setCameraLoading}
              />
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
          {screen == "manual" && !cameraLoading && (
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
