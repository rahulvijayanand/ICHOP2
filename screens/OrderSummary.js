import * as React from "react";
import { View, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import OrderSummaryInfo from "../components/Ordersummaryinfo";
import PI from "../components/Productinfo";
import { MaterialIcons } from "@expo/vector-icons";
import Ship from "../components/shipping";
import Location from "../components/Location";

const Info = [
  { name: "Download Invoice" },
  { name: "Leave a feedback" },
  { name: "Write a review" },
  { name: "Cancellation & Refund" },
];
export default function OrderSummary({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight + 10,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginBottom: 30 }}>
        <Location navigation={navigation} type="other" text="Order Summary" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderSummaryInfo />
        <View style={{ height: 1, borderWidth: 1, borderColor: "#263D2C1A" }} />
        <PI />
        <View style={{ height: 1, borderWidth: 1, borderColor: "#263D2C1A" }} />
        <View style={{ marginTop: 10, marginHorizontal: "5%" }}>
          <TextSemiBold style={{ fontSize: 24 }}>Payment Method</TextSemiBold>
          <View style={{ flexDirection: "row", marginVertical: "5%" }}>
            <View
              style={{
                width: 5,
                height: 5,
                backgroundColor: "black",
                marginTop: "3%",
                marginRight: "3%",
                borderRadius: 5,
              }}
            />
            <Text>Credit/Debit card</Text>
          </View>
        </View>
        <View style={{ height: 1, borderWidth: 1, borderColor: "#263D2C1A" }} />

        <Ship />

        <View style={{ marginVertical: "10%" }}>
          {Info.map((item, index) => (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "4%",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginLeft: 15, fontSize: 20 }}>
                    {item.name}
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </View>
              <View
                style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }}
              />
            </View>
          ))}
        </View>
        <View style={{ marginBottom: 70 }}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
