import React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import Location from "../components/Location";
import CategoryComponent from "../components/CategoryComponent";
const categoryimagelist = [
  { image: require("../assets/Selfcare.png"), name: "Selfcare",category:"selfcare" },
  { image: require("../assets/fashion.png"), name: "Home & Living",category:"homeandliving"},
  { image: require("../assets/gifts.png"), name: "Gifts",category:"gift"},
  { image: require("../assets/jewellery.png"), name: "Jewellery",category:"jewellery"},
  { image: require("../assets/crafts.png"), name: "Crafts",category:"craft"  },
  { image: require("../assets/fashion.png"), name: "Fashion",category:"fashion"  },
];
function CategoriesScreen({ route,navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Location navigation={navigation} type="location" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {categoryimagelist.map((item) => (
          <Pressable onPress={() => navigation.navigate("Categores",{category:item.category})}>
            <CategoryComponent image={item.image} name={item.name} />
          </Pressable>
        ))}
        <View style={{ paddingBottom: 100 }}></View>
      </ScrollView>
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
