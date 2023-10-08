import * as React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const G_info = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View>
          <View
            style={{
              marginHorizontal: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginLeft: "10%", fontSize: 20 }}>
                {item.title}
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
  );
};
export default G_info;
