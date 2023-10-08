import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";
const Amount = (props) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: "5%",
        borderWidth: 1,
        borderColor: "gray",
        padding: "6%",
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <TextSemiBold
        style={{
          fontSize: 16,
        }}
      >
        Amount Payable
      </TextSemiBold>
      <TextSemiBold
        style={{
        
          fontSize: 16,
        }}
      >
        ₹{props.name}
      </TextSemiBold>
    </TouchableOpacity>
  );
};
export default Amount;
