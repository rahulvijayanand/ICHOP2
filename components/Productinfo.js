import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
const Info = [
  { id: 1, name: "Actual price", price: "₹1300" },
  { id: 2, name: "Item total", price: "₹1190" },
  { id: 3, name: "Discount", price: "-₹0" },
  { id: 4, name: "Delivery charges", price: "₹20" },
  { id: 5, name: "You save", price: "₹110" },
];
const PI = () => {
  return (
    <View style={{ marginHorizontal: "5%", marginVertical: "5%" }}>
      <TextSemiBold style={{ fontSize: 24 }}>Product Info</TextSemiBold>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "5%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: "5%", marginHorizontal: "5%" }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/E3.png")}
            />
          </View>
          <View>
            <TextSemiBold style={{ marginTop: "5%", color: "#838383" }}>
              Delivery Estimate
            </TextSemiBold>
            <Text style={{ color: "#838383", fontSize: 11 }}>
              Handmade with pure Essential oils
            </Text>
            <Text style={{ color: "#263D2C6E", fontSize: 12 }}>Qty: 1</Text>
          </View>
        </View>
        <View style={{ marginTop: "5%" }}>
          <Text>$1210</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: "5%",
          marginVertical: "15%",
          borderColor: "#263D2C29",
          borderWidth: 1,
          padding: "5%",
          borderColor: "#263D2C29",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "gray",
          borderWidth: 0.3,
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        <TextSemiBold style={{ marginVertical: "5%" }}>
          Purchase Details{"\n"}
        </TextSemiBold>
        {Info.map((item, index) => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={index == 0 ? styles.col1 : styles.col2}>
              {item.name}
            </Text>
            <Text style={index == 0 ? styles.col1 : styles.col2}>
              {item.price}
            </Text>
          </View>
        ))}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "5%",
          }}
        >
          <TextSemiBold>Total Estimated:</TextSemiBold>
          <TextSemiBold>₹1210</TextSemiBold>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  col1: {
    color: "rgba(0, 0, 0, 0.48)",
  },
  col2: {
    color: "#000000",
  },
});
export default PI;
