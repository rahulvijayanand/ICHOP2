import React, { useContext, useCallback } from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import Text from "../fonts/Text";
import Location from "../components/Location";
import WishlistComp from "../components/WishlistComp";
import Search from "../components/Search";
import TextSemiBold from "../fonts/TextSemiBold";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
import { Pressable } from "react-native";

const categocop = [
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
    type: "best",
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
    type: "best",
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
];

function CategoRes({ route, navigation }) {
  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;
  const { category } = route.params;
  return (
    <View style={styles.container}>
      <Location navigation={navigation} type="location" />
      <Search type="filter" navigation={navigation} category={category} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold
          style={{ marginLeft: 20, fontSize: 21, marginBottom: 20 }}
        >
          Results (6)
        </TextSemiBold>
        {currentproductdata.map(
          (item) =>
            (category != "gift" && item["category"] == category && (
              <Pressable
                onPress={() => {
                  navigation.navigate("Products", { id: item.id });
                }}
              >
                <WishlistComp
                  id={item.id}
                  imageSource={item.images[0]}
                  title={item.name}
                  ratings={item.rating}
                  numReviews={item.verified_buyers}
                  oldPrice={item.originalprice}
                  newPrice={item.priceafterdiscount}
                  discount={item.offerpercentage}
                  colors={item.variants["variantcolor"]}
                  type={item.type}
                  navigation={navigation}
                  navi={"Products"}
                />
              </Pressable>
            )) ||
            (category == "gift" &&
              (item["category"] == "jewellery" ||
                item["category"] == "craft") && (
                <Pressable
                  onPress={() => {
                    navigation.navigate("Products", { id: item.id });
                  }}
                >
                  <WishlistComp
                    id={item.id}
                    imageSource={item.images[0]}
                    title={item.name}
                    ratings={item.rating}
                    numReviews={item.verified_buyers}
                    oldPrice={item.originalprice}
                    newPrice={item.priceafterdiscount}
                    discount={item.offerpercentage}
                    colors={item.variants["variantcolor"]}
                    type={item.type}
                  />
                </Pressable>
              ))
        )}
        <View style={{ marginBottom: 85 }}></View>
      </ScrollView>
    </View>
  );
}

export default CategoRes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
