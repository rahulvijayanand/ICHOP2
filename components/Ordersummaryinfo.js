import * as React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold"

const Info = [
  {
    oid: 1234567890,
    date: "24 April 2023,Monday",
    status: "Ordered",
    estimate: "28 April,2023 Friday",
  },
];

const op = () => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: "10%",
          marginVertical: "7%",
          padding: "3%",
          flexDirection: "row",
          justifyContent: "space-between",
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
          borderRadius:10,
        }}
      >
        <View>
          <View style={{ marginVertical: "5%" }}>
            <TextSemiBold style={styles.col1}>OrderID</TextSemiBold>
            <Text>123456789</Text>
          </View>
          <View>
            <TextSemiBold style={styles.col1}>Order Status</TextSemiBold>
            <Text>Ordered</Text>
          </View>
        </View>

        <View>
          <View style={{ marginVertical: "5%" }}>
            <TextSemiBold style={styles.col1}>Order date</TextSemiBold>
            <Text>24 April 2023,Monday</Text>
          </View>
          <View>
            <TextSemiBold style={styles.col1}>Delivery Estimate</TextSemiBold>
            <Text>28 April,2023 Friday</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default op;
const styles = StyleSheet.create({
  col1: {
    color: "#263D2C4D",
  },
});
