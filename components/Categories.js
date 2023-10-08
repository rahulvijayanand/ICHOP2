import React from "react";
import { View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";

const Categories = ({ categoriesList, imagesList, navigation }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingLeft: 20, marginTop: 30 }}
    >
      {categoriesList.map((category, index) => (
        <Pressable
          activeOpacity={0.5}
          style={styles.categoryContainer}
          key={category}
          onPress={() => navigation.navigate("Categores",{category:category.category})}
        >
          <View style={styles.profilepicContainer}>
            <Image source={imagesList[index]} style={styles.categoryImage} />
          </View>
          <TextSemiBold style={styles.categoryText}>{category}</TextSemiBold>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    marginRight: 27,
  },
  categoryImage: {
    width: 48,
    height: 48,
    borderRadius: 20,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 11,
    textAlign: "center",
  },
  profilepicContainer: {
    width: 48,
    height: 48,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Categories;
