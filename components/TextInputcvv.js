import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Textinput = (props) => {
  const [cvv, setCvv] = useState(null);
  return (
    <View>
      <TextInput
        style={Styles.box}
        onChangeText={setCvv}
        value={cvv}
        placeholder="cvv"
        keyboardType="numeric"
        placeholderTextColor="#263d39"
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  box: {
    height: 35,
    width: 80,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 6,
    fontSize: 18,
    fontFamily: "MetropolisRegular",
  },
});
export default Textinput;
