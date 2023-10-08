import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const ProdComponent = ({ title, text }) => {
  return (
    <View>
      <View style={styles.container}>
        <TextSemiBold style={styles.title}>{title}</TextSemiBold>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  text: {
    fontSize: 14,
  },
});

export default ProdComponent;
