import { View, Text, ScrollView, Pressable, Platform } from "react-native";
import React, { useContext, useState } from "react";
import SubMenu from "./subMenu";
import InputTamuCard from "./inputTamuCard";
import InputTamuImage from "../../static/image/inputTamu";
import * as DocumentPicker from "expo-document-picker";
import BASE_URL from "../../static/API";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DashboardContext } from "../../store/context/dashboardContext";
import * as FileSystem from "expo-file-system";
import saveFile from "../../utils/saveFile";
import guestBookTemplate from "../../static/guestBookTemplate";

const InputTamuSection = ({
  subMenu,
  setSubMenu,
  data,
  showModal,
  hideModal,
  setUploadStatus,
}) => {
  const dashboardCtx = useContext(DashboardContext);
  const [uploaded, setUploaded] = useState(data.listGuest.length > 0);

  // Handle Download
  const handleDownload = async () => {
    const filename = "template_buku_tamu";
    const result = await FileSystem.downloadAsync(
      guestBookTemplate,
      FileSystem.documentDirectory + filename
    );
    console.log(result);

    saveFile(
      result.uri,
      filename,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
  };

  // Handle Upload
  const handleUpload = async () => {
    setUploadStatus("loading");
    showModal();
    // Pick the document
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      console.log(response);

      if (!response.canceled) {
        console.log("success");
        const { name, size, uri, mimeType } = response.assets[0];
        const fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: mimeType,
        };

        // Upload the Document
        const url = `${BASE_URL}/guest/add`;
        const formData = new FormData();
        console.log(fileToUpload);
        formData.append("file", fileToUpload);
        formData.append("eventId", data.id);

        console.log(data.id);

        const token = await AsyncStorage.getItem("token");

        console.log("token = ", token);

        const upload = await axios.post(url, formData, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        });
        if (upload.data.message == "success") {
          const updateData = await axios.get(
            `${BASE_URL}/dashboard/${data.id}`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          dashboardCtx.setData(updateData.data.data);
          setUploadStatus("success");
          setUploaded(true);
        }
      }
    } catch (error) {
      console.log(error);
      setUploadStatus("failed");
    }
  };

  // Handle Download Generated File
  const handleDownloadGeneratedFile = () => {
    console.log("Download Generated File");
  };
  return (
    <View className="relative bg-[#F7F7F7] px-8 pt-10" style={{ flex: 1 }}>
      {/* SubMenu */}
      <SubMenu subMenu={subMenu} setSubMenu={setSubMenu} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <InputTamuCard
          number={1}
          title="Silahkan download template"
          text="Silakan klik tombol “Download Template” di sini untuk mendapatkan template daftar tamu dalam format file spreadsheet (*.XLS). Selanjutnya, isi file tersebut dengan data tamu Anda sesuai format yang ditentukan."
          icon={InputTamuImage.download}
          buttonText="Download Template"
          pressHandler={handleDownload}
          uploaded={uploaded}
        />
        <View className="mt-6">
          <InputTamuCard
            number={2}
            title="Unggah file yang telah Anda isi"
            text="Kemudian upload file yang sudah Anda isi dengan mengklik tombol upload di bawah. Format file harus *.XLS dengan ukuran maksimal 100 KB."
            icon={InputTamuImage.upload}
            buttonText="Upload File"
            pressHandler={handleUpload}
            uploaded={uploaded}
          />
        </View>
        <View className="mt-6 mb-12">
          <InputTamuCard
            number={3}
            title="Unggah file yang dihasilkan"
            text="Terakhir, Anda dapat mendownload hasilnya setelah tombol download dapat diklik."
            icon={InputTamuImage.download}
            buttonText="Download Generated File"
            pressHandler={handleDownloadGeneratedFile}
            uploaded={uploaded}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default InputTamuSection;
