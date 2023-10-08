import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import Text from "../fonts/Text";
import TextBold from "../fonts/TextBold";

const RectD = ({ data }) => {
  const { container, itemContainer, backgroundImage, boldText, normalText } =
    styles;

  return (
    <View style={container}>
      {data.map((item, index) => (
        <Pressable key={index} style={itemContainer}>
          <Image style={backgroundImage} source={item.backgroundImage} />
          <TextBold style={boldText}>{item.boldText}</TextBold>
          <View style={{ justifyContent: "center" }}>
            <Text style={normalText}>{item.normalText}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  itemContainer: {
    width: "48%",
    height: 160,
    borderRadius: 7,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  boldText: {
    fontSize: 22,
    color: "#fff",
    position: "absolute",
    width: 110,
    marginTop: 10,
    marginLeft: 10,
    lineHeight: 27,
  },
  normalText: {
    fontSize: 14,
    color: "#fff",
    position: "absolute",
    bottom: 15,
    marginLeft: 10,
  },
});

export default RectD;
