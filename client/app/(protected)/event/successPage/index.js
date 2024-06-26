import React from "react";
import SuccessPage from "../../../../components/successPage/successPage";
import { router } from "expo-router";

const Index = () => {
  const buttonHandler = () => {
    router.replace("../layout");
  };
  return (
    <SuccessPage
      message="RSVP Anda berhasil disimpan dalam acaranya. Sampai jumpa!"
      buttonText="Kembali ke Home Page"
      buttonHandler={buttonHandler}
    />
  );
};

export default Index;
