import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import G_info from "../components/General_info";
const g_info = [
  { id: 1, title: "Terms of service" },
  { id: 2, title: "Privacy Policy" },
  { id: 3, title: "Delivery and Refund" },
  { id: 4, title: "Newsletter" },
];
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.StatusBar} />
      <View
        style={{
          marginHorizontal: "5%",
          flexDirection: "row",
          marginTop: "7%",
        }}
      >
        <AntDesign name="arrowleft" size={28} color="black" />
        <Text style={{ fontSize: 24, marginHorizontal: "3%" }}>
          General Info
        </Text>
      </View>
      <View style={{ marginVertical: "10%" }}>
        <G_info data={g_info} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  StatusBar: {
    height: Constants.statusBarHeight + 5,
    backgroundColor: "#92E38A",
  },
});
