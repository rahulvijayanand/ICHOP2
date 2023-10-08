import React, { useState } from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import Location from "../components/Location";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const FILTER_DATA = [
  { label: "UK 6", value: false },
  { label: "UK 7", value: false },
  { label: "UK 8", value: false },
  { label: "UK 10", value: false },
  { label: "UK 11", value: false },
];

const COLOR_OPTIONS = [
  { color: "rgba(151, 71, 255, 0.12)", label: "Purple" },
  { color: "rgba(227, 71, 44, 0.12)", label: "Red" },
  { color: "rgba(255, 210, 0, 0.12)", label: "Mustard" },
  { color: "rgba(37, 207, 67, 0.12)", label: "Green" },
  { color: "rgba(66, 133, 244, 0.12)", label: "Blue" },
];

export default function PriceRangeSlider({ navigation }) {
  const [priceRange, setPriceRange] = useState(100);
  const [filterData, setFilterData] = useState(FILTER_DATA);
  const [colorIndex, setColorIndex] = useState(COLOR_OPTIONS);

  const handleFilterOptionPress = (index) => {
    const newData = [...filterData];
    newData[index].value = !newData[index].value;
    setFilterData(newData);
  };

  const handleColorOptionPress = (index) => {
    const newDat = [...colorIndex];
    newDat[index].value = !newDat[index].value;
    setColorIndex(newDat);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <Location type="other" text="Filters" navigation={navigation} />
      </View>
      <View style={styles.separator} />
      <View style={styles.sliderContainer}>
        <Text style={{ fontSize: 22, marginBottom: 10 }}>Price</Text>
        <Slider
          style={styles.slider}
          value={priceRange}
          minimumValue={100}
          maximumValue={8000}
          step={100}
          onValueChange={handlePriceRangeChange}
          thumbTintColor="#92e3a9"
          minimumTrackTintColor="#92e3a9"
        />
      </View>
      <View style={styles.textContainer}>
        <TextSemiBold style={styles.label}>₹{priceRange}</TextSemiBold>
        <TextSemiBold style={styles.label}>₹8000</TextSemiBold>
      </View>
      <View style={styles.separator} />
      <View style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 15 }}>
        <Text style={{ fontSize: 22 }}>Size</Text>
      </View>
      <View style={styles.filterContainer}>
        {filterData.slice(0, 3).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterOption,
              item.value && styles.activeFilterOption,
            ]}
            onPress={() => handleFilterOptionPress(index)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.filterContainer}>
        {filterData.slice(3).map((item, index) => (
          <TouchableOpacity
            key={index + 3}
            style={[
              styles.filterOption,
              item.value && styles.activeFilterOption,
            ]}
            onPress={() => handleFilterOptionPress(index + 3)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.separator, { marginTop: 20 }]} />
      <View style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 15 }}>
        <Text style={{ fontSize: 22 }}>Colors</Text>
      </View>
      <View style={styles.colorContainer}>
        {colorIndex.slice(0, 3).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorOption,
              item.value && styles.activeColorOption,
              { backgroundColor: item.color },
            ]}
            onPress={() => handleColorOptionPress(index)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.colorContainer}>
        {colorIndex.slice(3).map((item, index) => (
          <TouchableOpacity
            key={index + 3}
            style={[
              styles.colorOption,
              item.value && styles.activeColorOption,
              { backgroundColor: item.color },
            ]}
            onPress={() => handleColorOptionPress(index + 3)}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.separator, { marginTop: 20 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 10,
  },
  sliderContainer: {
    width: "100%",
    alignSelf: "center",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  slider: {
    height: 40,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center",
    marginTop: -7.5,
    marginBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#dbe0dc",
    marginBottom: 15,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 10,
  },
  filterOption: {
    backgroundColor: "rgba(38, 61, 44, 0.1)",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  activeFilterOption: {
    backgroundColor: "#92e3a9",
  },
  colorContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 10,
  },
  colorOption: {
    backgroundColor: "rgba(38, 61, 44, 0.1)",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  activeColorOption: {
    borderWidth: 1,
    borderColor: "#000",
  },
});
