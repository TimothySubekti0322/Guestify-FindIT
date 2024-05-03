import React from "react";
import SuccessPage from "../../../../components/successPage/successPage";
import { router } from "expo-router";

const Index = () => {
  const buttonHandler = () => {
    router.replace({ pathname: "../layout", params: { screen: "scanner" } });
  };
  return (
    <SuccessPage
      message="Data Anda berhasil disimpan dalam buku tamu. Sampai jumpa di acaranya nanti!"
      buttonText="Kembali ke Scanner"
      buttonHandler={buttonHandler}
    />
  );
};

export default Index;
