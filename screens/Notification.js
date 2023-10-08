import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Location from "../components/Location";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Preference = [
  { id: 1, title: "Offer ", name: require("../assets/Vector-13.png") },
  { id: 2, title: "Remainder", name: require("../assets/Vector-11.png") },
  {
    id: 3,
    title: "Order Update",
    name: require("../assets/Group285.png"),
  },
  {
    id: 4,
    title: "Newsletter",
    name: require("../assets/Vector-15.png"),
  },
];

export default function Notification({ navigation }) {
  const [opt1, setopt1] = useState([true, true, true, true]);
  const [turn, setTurn] = useState(false);
  //const [count,setCount]=useState(0);
  function handleopt1(index) {
    const newI1 = [...opt1];

    newI1[index] = !newI1[index];
    setopt1(newI1);

    //{count>0?setTurn(true):setTurn(false)}
  }

  function handlepress() {
    const newI2 = [...opt1];
    {
      newI2.map((item, i) => (newI2[i] = turn));
    }

    setopt1(newI2);
    setTurn(!turn);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: "10%",
        }}
      >
        <Location navigation={navigation} type="other" text="Notifications" />
      </View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
      {Preference.map((item, index) => (
        <View>
          <View
            style={{
              marginHorizontal: "5%",

              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "3%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                source={item.name}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => handleopt1(index)}
              style={styles.switchcontainer}
            >
              <MaterialCommunityIcons
                name={opt1[index] ? "toggle-switch" : "toggle-switch-off"}
                size={48}
                color={opt1[index] ? "#25CF43" : "#EB5657"}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }}
          />
        </View>
      ))}
      <TouchableOpacity
        onPress={handlepress}
        style={{
          marginVertical: "15%",
          marginHorizontal: "5%",
          backgroundColor: "#263d2c",
          padding: "3%",
          borderRadius: 10,
        }}
      >
        <TextSemiBold
          style={{
            color: "#92E38A",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Turn {turn ? "On" : "Off"} All
        </TextSemiBold>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: "#fff",
  },
  switchcontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
