import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const OC = (props) => {
  return (
    <View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <View style={{ flexDirection: "row", flex: 2 }}>
          <Image
            source={props.name}
            style={{ height: 40, width: 40, marginRight: "5%" }}
          />
          <Text>
            {props.title1}
            {"\n"}
            <TextSemiBold style={{ color: props.color }}>
              {props.status}
            </TextSemiBold>
          </Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};
export default OC;
