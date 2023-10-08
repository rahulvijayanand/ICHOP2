import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
const Othermodes = ({ onlinepay, other }) => {
  const [opt1, setopt1] = useState([true, false, false]);

  function handleopt1(index) {
    const newI1 = [...opt1];

    newI1[index] = true;
    {
      newI1.map((item, i) => (i != index ? setopt1((newI1[i] = false)) : null));
    }
    setopt1(newI1);
  }
  /*
    setLiked(liked[index]=true);
    {liked.map((item,i)=>
    i!=index?setLiked(liked[i]=false):null
    )}
    */
  const [opt2, setopt2] = useState([false, false, false]);

  function handleopt2(index) {
    const newI2 = [...opt2];

    newI2[index] = true;
    {
      newI2.map((item, i) => (i != index ? setopt2((newI2[i] = false)) : null));
    }

    setopt2(newI2);
  }

  return (
    <View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#263D2C29" }} />
      <View style={{ padding: "5%" }}>
        {onlinepay.map((item, index) => (
          <View style={{ marginVertical: "2%" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <TouchableOpacity onPress={() => handleopt1(index)}>
                <MaterialCommunityIcons
                  name={opt1[index] ? "radiobox-marked" : "radiobox-blank"}
                  size={18}
                  color={opt1[index] ? "black" : "#263D2C"}
                />
              </TouchableOpacity>

              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 14, marginLeft: "4%", marginBottom: "2%" }}
                >
                  {item.name}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#263D2C29" }} />
      {other.map((item, index) => (
        <View>
          <View style={{ padding: "6%" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <TouchableOpacity onPress={() => handleopt2(index)}>
                <MaterialCommunityIcons
                  name={opt2[index] ? "radiobox-marked" : "radiobox-blank"}
                  size={18}
                  color={opt2[index] ? "black" : "#263D2C"}
                />
              </TouchableOpacity>
              <View style={{ flex: 2 }}>
                <TextSemiBold
                  style={{
                    fontSize: 14,
                    marginLeft: "4%",
                    marginBottom: "2%",
                   
                  }}
                >
                  {item.name}
                </TextSemiBold>
                {index == 0 || index == 2 ? (
                  <View style={{ marginLeft: "4%" }}>
                    <Text>
                      {index == 0 ? item.info : null}
                      <Text style={{ color: "#82acd9" }}>
                        {index == 0 ? item.l : null}
                      </Text>
                    </Text>
                    <Text>{index == 2 ? item.info : null}</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
          {index != 2 ? (
            <View
              style={{ height: 1, borderWidth: 0.5, borderColor: "#263D2C29" }}
            />
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Othermodes;
