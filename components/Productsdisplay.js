import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "../fonts/Text";

const ImageTextGrid = ({ items }) => {
  return (
    <View style={styles.gridContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.gridItem}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#e9f9ee",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    borderRadius: 10,
  },
  gridItem: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#92e3a9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },
  text: {
    fontSize: 13,
    width: 94,
    alignSelf: "center",
    marginBottom: 10,
    marginLeft: 8,
  },
});

export default ImageTextGrid;
