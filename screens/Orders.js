import React from "react";
import { View, StyleSheet, Image, StatusBar, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Orderscomp from "../components/Orderscomp";
import Location from "../components/Location";

const Details = [
  {
    id: 1,
    title: "AA Organic Soap",
    name: require("../assets/R1.png"),
    status: "On The Way",
    color: "#E7C216",
    navi: "Tracking",
  },
  {
    id: 2,
    title: "BB Pickle",
    name: require("../assets/R1.png"),
    status: "Shipped",
    color: "#263D2CCC",
    navi: "Tracking",
  },
  {
    id: 3,
    title: "AA Organic Soap",
    name: require("../assets/R1.png"),
    navi: "Tracking",
    status: "Delivered",
    color: "#25CF43",
  },
  {
    id: 4,
    title: "DD Bag",
    name: require("../assets/R1.png"),
    status: "Ordered",
    color: "#263D2CCC",
    navi: "Tracking",
  },
  {
    id: 5,
    title: "EE Bag",
    name: require("../assets/R1.png"),
    status: "On The Way",
    color: "#E7C216",
    navi: "Tracking",
  },
];
export default function Orders({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{ marginTop: StatusBar.currentHeight + 10, marginBottom: 30 }}
      >
        <Location navigation={navigation} type="other" text="Orders" />
      </View>
      {Details.map((item, index) => (
        <Pressable onPress={() => navigation.navigate("Tracking")}>
          <Orderscomp
            name={item.name}
            title1={item.title}
            status={item.status}
            color={item.color}
          />
        </Pressable>
      ))}

      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
