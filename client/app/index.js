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
