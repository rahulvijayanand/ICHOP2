import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Save from "../components/Savedcardcomponent";
import Location from "../components/Location";
const Cardinfo = [
  { id: 1, name: "Visa ****9080", exp_date: "08/27" },
  { id: 2, name: "Yes Bank Credit Card ****8980", exp_date: "07/29" },
  { id: 3, name: "ICICI Credit Card ****2880", exp_date: "08/27" },
];
export default function Savedcards({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <Location type="other" text="Saved Cards" navigation={navigation} />
      </View>
      <View
        style={{
          marginHorizontal: "5%",
        }}
      >
        <Save data={Cardinfo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
