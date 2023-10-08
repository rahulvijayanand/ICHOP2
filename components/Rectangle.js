import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextLight from "../fonts/TextLight";
import Text from "../fonts/Text";
const RectangularComponent = ({ data }) => {
  const { container, itemContainer, image, text } = styles;

  return (
    <Pressable activeOpacity={0.5} style={container}>
      {data.map((item, index) => (
        <LinearGradient
          key={index}
          colors={["#92e3a9", "#b1edd3"]}
          style={itemContainer}
        >
          <Text style={text}>{item.text}</Text>
          <Image style={image} source={item.image} />
        </LinearGradient>
      ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  itemContainer: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});

export default RectangularComponent;
