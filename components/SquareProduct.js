import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const SquareComponent = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextSemiBold style={styles.title}>{title}</TextSemiBold>
      </View>
      <View style={styles.separator} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "#e9f9ee",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#263d2c",
    marginBottom: 30,
  },
  titleContainer: {
    padding: 13,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#c2e3c8",
    marginBottom: 15,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  text: {
    alignSelf: "center",
    fontSize: 14,
  },
});

export default SquareComponent;
