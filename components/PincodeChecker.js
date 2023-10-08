import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const SearchComponent = ({ onSearch }) => {
  const [pincode, setPincode] = useState("");

  const handleSearch = () => {
    if (pincode.length === 6) {
      onSearch(pincode);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={pincode}
        onChangeText={setPincode}
        placeholder="Enter PIN"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <TextSemiBold>Check</TextSemiBold>
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#263d2c",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: "MetropolisRegular",
  },
  searchButton: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 10,
  },
});
