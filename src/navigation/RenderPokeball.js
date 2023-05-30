import React from "react";
import { Image } from "react-native";

export default function RenderPokeball() {
  return (
    <Image
      source={require("../../assets/pokebola.png")}
      style={{
        width: 75,
        height: 75,
        top: -15,
      }}
    />
  );
}
