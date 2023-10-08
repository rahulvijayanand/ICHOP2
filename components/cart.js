import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";

const ShoppingCartIcon = ({ itemsInCart,navigation }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.container} onPress={() => navigation.navigate("CartPage")}>
      <Image source={require("../assets/Vector.png")} style={styles.icon} />
      {itemsInCart > 0 && (
        <View style={styles.bubble}>
          <TextSemiBold style={styles.bubbleText}>{itemsInCart}</TextSemiBold>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  bubble: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#92e3a9",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleText: {
    color: "#263d2c",
    fontSize: 12,
  },
});

export default ShoppingCartIcon;
