import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";

const { width } = Dimensions.get("window");

const Search = ({ type, navigation,category}) => {
  const renderFilter = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginRight: 20,
          marginLeft: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#263d2c",
            borderWidth: 1,
            marginTop: 35,
            marginBottom: 35,
            width: Dimensions.get("window").width - 100,
          }}
        >
          <TextInput
            placeholder={"Search for "+ category}
            placeholderTextColor={"#263d2c"}
            style={{
              height: 45,
              width: Dimensions.get("window").width - 135,
              fontSize: 13,
              fontFamily: "MetropolisRegular",
              marginLeft: 10,
            }}
          />
          <Image
            source={require("../assets/Vector-17.png")}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#263d2c",
            borderWidth: 1,
            marginTop: 35,
            marginBottom: 35,
            width: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Filter")}
        >
          <TextSemiBold style={{ fontSize: 10 }}>Filters</TextSemiBold>
          <Image
            source={require("../assets/Vector-8.png")}
            style={styles.icon1}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          borderRadius: 10,
          borderColor: "#263d2c",
          borderWidth: 1,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 35,
          marginBottom: 35,
        }}
      >
        <TextInput
          placeholder="Search for products"
          placeholderTextColor={"#263d2c"}
          style={{
            height: 45,
            width: Dimensions.get("window").width - 80,
            fontSize: 13,
            fontFamily: "MetropolisRegular",
            marginLeft: 10,
          }}
        />
        <Image
          source={require("../assets/Vector-17.png")}
          style={styles.icon}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {type === "filter" && renderFilter()}
      {type === "search" && renderSearch()}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    right: 10,
    top: 10,
  },
  icon1: {
    width: 25,
    height: 20,
    resizeMode: "contain",
  },
});

export default Search;
