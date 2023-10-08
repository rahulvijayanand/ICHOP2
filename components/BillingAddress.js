import { View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const BillingAddress = () => {
  return (
    <View
      style={{
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: "white",
        height: height * 0.18,
        width: width - 50,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 50,
        borderWidth: 1,
        borderColor: "#eeeeee",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextSemiBold
          style={{
            color: "black",
            fontSize: 21,
            marginLeft: 15,
            marginTop: 20,
          }}
        >
          Billing Address
        </TextSemiBold>
        <TouchableOpacity activeOpacity={0.5}>
          <TextSemiBold
            style={{
              color: "black",
              fontSize: 12,
              marginRight: 25,
              marginTop: 26,
            }}
          >
            Edit
          </TextSemiBold>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 13,
          marginLeft: 15,
          marginTop: 20,
          width:200
        }}
      >
        Plot No.14, Door No.3/2208, PadmavathyStreet, Porur, Chennai-125
      </Text>
    </View>
  );
};

export default BillingAddress;
