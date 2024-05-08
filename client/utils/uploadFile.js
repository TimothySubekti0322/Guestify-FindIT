import * as DocumentPicker from "expo-document-picker";
import BASE_URL from "../static/API";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const handleUpload = async ({
  setUploadStatus,
  showModal,
  data,
  dashboardContextSetData,
}) => {
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
        const updateData = await axios.get(`${BASE_URL}/dashboard/${data.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        dashboardContextSetData(updateData.data.data);
        setUploadStatus("success");
        setUploaded(true);
      }
    }
  } catch (error) {
    console.log(error);
    setUploadStatus("failed");
  }
};

export default handleUpload;
