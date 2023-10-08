import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
import SearchComponent from "./PincodeChecker";

const DeliveryProd = () => {
  return (
    <View style={styles.container}>
      <TextSemiBold style={{ fontSize: 22 }}>Delivery Options</TextSemiBold>
      <TextSemiBold style={{ fontSize: 14, marginTop: 20 }}>
        Check for availability
      </TextSemiBold>
      <View style={{ marginTop: 5 }}>
        <SearchComponent />
      </View>
      <View style={{ marginTop: 20, marginLeft: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={require("../assets/Vector-26.png")}
              style={styles.icon}
            />
            <Image
              source={require("../assets/Vector-25.png")}
              style={[
                styles.icon,
                {
                  position: "absolute",
                  height: 15,
                  width: 15,
                  top: 2,
                  left: -3,
                },
              ]}
            />
          </View>
          <Text style={{ fontSize: 12, alignSelf: "center", marginLeft: 10 }}>
            Usually delivered in 4-7 business days
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            source={require("../assets/Vector-22.png")}
            style={styles.icon}
          />
          <Text style={{ fontSize: 12, alignSelf: "center", marginLeft: 10 }}>
            Orders gets dispatched within 24 hours
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View>
            <Image
              source={require("../assets/Vector-23.png")}
              style={styles.icon}
            />
            <Image
              source={require("../assets/Vector-24.png")}
              style={[
                styles.icon,
                {
                  position: "absolute",
                  height: 18,
                  width: 18,
                  top: 3,
                  left: 2,
                },
              ]}
            />
          </View>
          <Text style={{ fontSize: 12, alignSelf: "center", marginLeft: 10 }}>
            Order cannot be cancelled after shipment
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9f9ee",
    padding: 15,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default DeliveryProd;
