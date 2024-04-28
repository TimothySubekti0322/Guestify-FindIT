import { View } from "react-native";
import React from "react";

const WhiteFrame = ({ width }) => {
  return (
    <View className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center">
      <View style={{ width: width * 0.5, height: width * 0.5 }}>
        <View
          className="absolute flex-row border-t-8 border-l-8 border-white -left-1 -top-1 rounded-tl-2xl "
          style={{ width: width * 0.15, height: width * 0.15 }}
        ></View>
        <View
          className="absolute flex-row border-t-8 border-r-8 border-white -right-1 -top-1 rounded-tr-2xl "
          style={{ width: width * 0.15, height: width * 0.15 }}
        ></View>
        <View
          className="absolute border-b-8 border-l-8 border-white -left-1 fex-row -bottom-1 rounded-bl-2xl "
          style={{ width: width * 0.15, height: width * 0.15 }}
        ></View>
        <View
          className="absolute border-b-8 border-r-8 border-white -right-1 lex-row -bottom-1 rounded-br-2xl "
          style={{ width: width * 0.15, height: width * 0.15 }}
        ></View>
      </View>
    </View>
  );
};

export default WhiteFrame;
