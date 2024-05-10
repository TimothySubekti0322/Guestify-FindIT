import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import { CreateEventContext } from "../../../../store/context/createEventContext";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/header/header";
import InputField from "../../../../components/inputField/inputField";
import DatePicker from "../../../../components/createEvent/datePicker";
import Button from "../../../../components/button/button";

const initialFormData = {
  type: "",
  owner: "",
  eventName: "",
  guest: null,
  location: "",
  date: "",
};

const CreateEvent = () => {
  const [form, setForm] = useState(initialFormData);

  const createEventCtx = useContext(CreateEventContext);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleNext = () => {
    createEventCtx.setType(form.type);
    createEventCtx.setOwner(form.owner);
    createEventCtx.setName(form.eventName);
    createEventCtx.setGuest(form.guest);
    createEventCtx.setLocation(form.location);
    createEventCtx.setDate(form.date);
    createEventCtx.setPrice(form.guest * 10000);
    router.push("./createEvent/pembayaran1");
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView
          className="bg-[#F7F7F7] px-8"
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View className="mt-12">
              <Header title="Buat Acara" />
            </View>
            <InputField
              title="Tipe Acara"
              placeholder="Masukan Tipe Acara"
              name="type"
              handleChange={handleChange}
              type="text"
            />
            <InputField
              title="Nama Pemilik Acara"
              placeholder="Masukkan Nama Pemilik Acara"
              name="owner"
              handleChange={handleChange}
              type="text"
            />
            <InputField
              title="Nama Acara"
              placeholder="Masukkan Nama Acara"
              name="eventName"
              handleChange={handleChange}
              type="text"
            />
            <InputField
              title="Jumlah Tamu"
              placeholder="Masukkan Jumlah Tamu"
              name="guest"
              handleChange={handleChange}
              type="number"
            />
            <InputField
              title="Tempat Berlangsung Acara"
              placeholder="Masukkan Alamat"
              name="location"
              handleChange={handleChange}
              type="text"
            />
            <DatePicker
              title="Tanggal Berlangsung Acara"
              handleChange={handleChange}
            />
            <Button title="lanjutkan" handlePress={() => handleNext()} />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateEvent;
