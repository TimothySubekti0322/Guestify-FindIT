import React from "react";
import SuccessPage from "../../../../components/successPage/successPage";

const Index = () => {
  return (
    <SuccessPage
      message="RSVP Anda berhasil disimpan dalam acaranya. Sampai jumpa!"
      buttonText="Kembali ke Home Page"
      buttonRoute="../layout"
    />
  );
};

export default Index;
