import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
import Location from "../components/Location";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import TextLight from "../fonts/TextLight";
let lineheight = 175;
const state = [
  { id: 1, info: "Ordered", pos: false },
  { id: 2, info: "Shipped", pos: false },
  {
    id: 3,
    info: "On the Way",
    pos: true,
    xtra: "Package arrived at Phaila Facility at Tambaram, Tamil Nadu at 3.35 AM Thursday, 26 August",
  },
  { id: 4, info: "Delivered", pos: false },
];
const Info = [
  { id: 1, name: "Order Summary", navi: "Ordersummary" },
  { id: 2, name: "Download Invoice", navi: "Tracking" },
  { id: 3, name: "Leave a Feedback", navi: "Tracking" },
  { id: 4, name: "Write a Review", navi: "Tracking" },
  { id: 5, name: "Cancellation", navi: "Tracking" },
];
export default function Tracking({ navigation }) {
  return (
    <View style={styles.container}>
      <Location navigation={navigation} type="other" text="Tracking" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 1,
            borderWidth: 0.5,
            borderColor: "#d0d6d4",
            marginTop: 30,
          }}
        />
        <View style={{ backgroundColor: "rgba(38, 61, 44, 0.02)" }}>
          <View style={{ marginHorizontal: "8%", marginTop: "8%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={require("../assets/E3.png")}
                />
              </View>
              <View style={{ flex: 3 }}>
                <TextSemiBold style={{ color: "#263D2C" }}>
                  Delivery Estimate
                </TextSemiBold>
                <TextLight style={{ color: "#263D2C" }}>
                  Saturday, 22 April 2023
                </TextLight>
                <Text style={{ color: "#263D2C6E" }}>
                  Tracking ID:17187332873
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: "10%" }}>
              <View style={{}}>
                <ImageBackground
                  style={{ height: lineheight, width: 15 }}
                  source={require("../assets/line.png")}
                >
                  {state.map((item, index) => (
                    <View
                      style={
                        index == 0
                          ? styles.top1
                          : index == 3
                          ? styles.top3
                          : styles.top2
                      }
                    >
                      <Octicons
                        name="dot-fill"
                        size={item.pos ? 30 : 24}
                        color={item.pos ? "#E7C216" : "#D8E0DA"}
                      />
                    </View>
                  ))}
                </ImageBackground>
              </View>
              <View style={{ flex: 2, marginHorizontal: "5%" }}>
                {state.map((item, index) => (
                  <View>
                    <View
                      style={index != 2 ? styles.txtspace : { marginBottom: 5 }}
                    >
                      <TextSemiBold
                        style={index == 2 ? {} : { color: "#D8E0DA" }}
                      >
                        {item.info}
                      </TextSemiBold>
                    </View>
                    <View
                      style={
                        index == 2 ? { marginBottom: lineheight / 5 } : null
                      }
                    >
                      <Text style={{ fontSize: 10 }}>
                        {index == 2 ? item.xtra : null}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
        <View>
          {Info.map((item, index) => (
            <View>
              <Pressable
                onPress={() => navigation.navigate(item.navi)}
                style={{
                  marginHorizontal: "3%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "4%",
                  marginLeft: 6,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginLeft: "10%", fontSize: 20 }}>
                    {item.name}
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Pressable>
              <View
                style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }}
              />
            </View>
          ))}
        </View>
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: "#fff",
  },
  top1: {
    justifyContent: "center",
    alignItems: "center",
    top: lineheight - lineheight - 5,
    marginBottom: 10,
  },
  top2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  top3: {
    justifyContent: "center",
    alignItems: "center",
    bottom: -lineheight / 5,
  },
  txtspace: {
    color: "#D8E0DA",
    marginBottom: 5,
  },
});
