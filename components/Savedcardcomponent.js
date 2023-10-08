import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import Checkbox from "./Checkbox";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const Savedcards = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 15,
        borderColor: "#afb3b1",
        borderWidth: 0.5,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
      }}
    >
      {data.map((item, index) => (
        <View key={index}>
          <View style={{ padding: "5%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextSemiBold style={{ fontSize: 15 }}>{item.name}</TextSemiBold>
              <TouchableOpacity activeOpacity={0.5}>
                <TextSemiBold
                  style={{
                    textDecorationLine: "underline",
                    textDecorationColor: "black",
                    marginLeft: "5%",
                  }}
                >
                  Edit
                </TextSemiBold>
              </TouchableOpacity>
            </View>
            <Text style={{ marginVertical: "5%" }}>
              Arunkumar {"\n"}Expires : {item.exp_date}{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginVertical: "5%",
                width: "70%",
              }}
            >
              <Checkbox />
              <Text style={{ marginLeft: "3%", fontSize: 12 }}>
                Save card as per new RBI guidelines.{" "}
                <Text style={{ color: "#82acd9" }}>Learn more</Text>
              </Text>
            </View>
          </View>
          {index !== data.length - 1 && (
            <View
              style={{
                height: 1,
                borderWidth: 0.5,
                borderColor: "#afb3b1",
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default Savedcards;
