import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Checkbox = () => {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };

  return (
    <TouchableOpacity onPress={toggleCheck} style={styles.container}>
      <MaterialCommunityIcons
        name={!check ? "checkbox-blank-outline" : "checkbox-marked"}
        size={25}
        color={!check ? "#6d7375" : "#82acd9"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Checkbox;
