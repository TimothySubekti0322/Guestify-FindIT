import { Platform, ToastAndroid } from "react-native";
import * as FileSystem from "expo-file-system";

async function saveFile(uri, filename, mimetype) {
  if (Platform.OS === "android") {
    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (permissions.granted) {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        filename,
        mimetype
      )
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, base64, {
            encoding: FileSystem.EncodingType.Base64,
          });
          ToastAndroid.show("File saved successfully ✅", ToastAndroid.SHORT);
        })
        .catch((e) =>
          ToastAndroid.show("Failed to save file ❌", ToastAndroid.SHORT)
        );
    } else {
      shareAsync(uri);
    }
  } else {
    shareAsync(uri);
  }
}

export default saveFile;
