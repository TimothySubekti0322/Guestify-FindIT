import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { Stack, router } from "expo-router";
import { Button } from "react-native-paper";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function checkRememberMe() {
      const rememberMe = await AsyncStorage.getItem("rememberMe");
      if (rememberMe) {
        router.replace({ pathname: "../layout", params: { screen: "home" } });
      }
    }
    checkRememberMe();
    setLoading(false);
  }, []);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      {!loading && (
        <View className="items-center justify-center" style={{ flex: 1 }}>
          <Image
            source={require("../assets/getting-started/splash-screen-background.png")}
            style={{
              resizeMode: "cover",
              width: width,
              height: height,
              flex: 1,
            }}
          />

          <View className="px-[10%] absolute">
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
        </View>
      )}
    </>
  );
};

export default App;
