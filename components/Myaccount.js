import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Text from "../fonts/Text";

const Myacc = (props) => {
  const { img } = styles;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "3%",
          padding: "5%",
          paddingRight: "3%",
          marginHorizontal: "5%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={[img, { marginRight: 15 }]} source={props.name} />

          <Text style={{ fontSize: 18 }}>{props.title}</Text>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
    </View>
  );
};

export default Myacc;

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
});
