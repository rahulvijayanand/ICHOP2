import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";

import Textinput from "./TextInputcvv";
import Checkbox from "./Checkbox";

const Saveopt = ({ data }) => {
  const [opt1, setOpt1] = useState(true);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);

  const toggleOpt1 = () => {
    setOpt1(!opt1);
    setOpt3(false);
    setOpt2(false);
  };
  const toggleOpt2 = () => {
    setOpt2(!opt2);
    setOpt1(false);
    setOpt3(false);
  };
  const toggleOpt3 = () => {
    setOpt3(!opt3);
    setOpt2(false);
    setOpt1(false);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <TextSemiBold
          style={{
            fontSize: 18,
          }}
        >
          Saved cards
        </TextSemiBold>
        <TextSemiBold
          style={{
            fontSize: 16,
          }}
        >
          Edit
        </TextSemiBold>
      </View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#afb3b1" }} />
      {data.map((item, index) => (
        <View>
          <View style={{ padding: "5%" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              {index == 0 ? (
                <TouchableOpacity onPress={toggleOpt1}>
                  <MaterialCommunityIcons
                    name={opt1 ? "radiobox-marked" : "radiobox-blank"}
                    size={22}
                    color={opt1 ? "black" : "#263D2C"}
                  />
                </TouchableOpacity>
              ) : null}
              {index == 1 ? (
                <TouchableOpacity onPress={toggleOpt2}>
                  <MaterialCommunityIcons
                    name={opt2 ? "radiobox-marked" : "radiobox-blank"}
                    size={22}
                    color={opt2 ? "black" : "#263D2C"}
                  />
                </TouchableOpacity>
              ) : null}
              {index == 2 ? (
                <TouchableOpacity onPress={toggleOpt3}>
                  <MaterialCommunityIcons
                    name={opt3 ? "radiobox-marked" : "radiobox-blank"}
                    size={22}
                    color={opt3 ? "black" : "#263D2C"}
                  />
                </TouchableOpacity>
              ) : null}

              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextSemiBold
                  style={{
                    fontSize: 15,
                    marginLeft: "2%",
                    marginBottom: "2%",
                  }}
                >
                  {item.name}
                </TextSemiBold>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: "10%",
              }}
            >
              <Text style={{ marginVertical: "7%" }}>
                Arunkumar {"\n"}Expires : {item.exp_date}{" "}
              </Text>
              {index == 0 && opt1 == true ? <Textinput /> : null}
              {index == 1 && opt2 == true ? <Textinput /> : null}
              {index == 2 && opt3 == true ? <Textinput /> : null}
            </View>
            {index == 0 && opt1 == true ? (
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: "5%",
                  width: "80%",
                }}
              >
                <Checkbox />
                <Text style={{ marginLeft: "3%" }}>
                  Save card as per new RBI guidelines.{" "}
                  <Text style={{ color: "#82acd9" }}>Learn more</Text>
                </Text>
              </View>
            ) : null}
            {opt2 && (index == 1) == true ? (
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: "5%",
                  width: "80%",
                }}
              >
                <Checkbox />
                <Text style={{ marginLeft: "3%" }}>
                  Save card as per new RBI guidelines.{" "}
                  <Text style={{ color: "#82acd9" }}>Learn more</Text>
                </Text>
              </View>
            ) : null}
            {index == 2 && opt3 == true ? (
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: "5%",
                  width: "80%",
                }}
              >
                <Checkbox />
                <Text style={{ marginLeft: "3%" }}>
                  Save card as per new RBI guidelines.{" "}
                  <Text style={{ color: "#82acd9" }}>Learn more</Text>
                </Text>
              </View>
            ) : null}
          </View>
          {index != 2 ? (
            <View
              style={{ height: 1, borderWidth: 0.5, borderColor: "#afb3b1" }}
            />
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Saveopt;
