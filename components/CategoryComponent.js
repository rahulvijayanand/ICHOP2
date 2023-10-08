import { View, ImageBackground, ScrollView, Dimensions } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
const CategoryComponent = (props) => {
  return (
    <ImageBackground
      style={{
        height: height * 0.2,
        width: width - 50,
        alignSelf: "center",
        marginTop: 20,
      }}
      source={props.image}
      imageStyle={{ resizeMode: "cover", borderRadius: 15 }}
    >
      <TextSemiBold
        style={{
          fontSize: 28,
          margin: 10,
          marginLeft: 15,
          color: "white",
        }}
      >
        {props.name}
      </TextSemiBold>
    </ImageBackground>
  );
};

export default CategoryComponent;
