import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import Text from "../fonts/Text";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Location from "../components/Location";
import TextSemiBold from "../fonts/TextSemiBold";
import Categories from "../components/Categories";
import RectangularComponent from "../components/Rectangle";
import RectD from "../components/DealsRec";
import BestSeller from "../components/BestSeller";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";

function HomeScreen({ route, navigation }) {
  const slides = [
    { image: require("../assets/1.png") },
    { image: require("../assets/2.png") },
    { image: require("../assets/3.png") },
    { image: require("../assets/4.png") },
  ];

  const data = [
    {
      image: require("../assets/E1.png"),
      text: "Dairy Products",
    },
    {
      image: require("../assets/E4.png"),
      text: "Personal Hygiene",
    },
    {
      image: require("../assets/E3.png"),
      text: "Groceries",
    },
    {
      image: require("../assets/E2.png"),
      text: "Fabric",
    },
  ];

  const dataDa = [
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "Upto 50% off",
      normalText: "Home essentials, Personal hygiene",
    },
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "From Rs.199",
      normalText: "Gifts, crafts",
    },
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "Under Rs.1000",
      normalText: "Home decor, Antiques",
    },
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "Buy One Get One",
      normalText: "Selfcare products",
    },
  ];

  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;

  const handleCartPress = (id) => {
    const newState = currentproductdata.map((item) => {
      if (item.id === id) {
        return { ...item, iscart: !iscart };
      }
      return item;
    });
    setproductdata(newState);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#92e3a9"} barStyle={"dark-content"} />
      <Location navigation={navigation} type="location" />
      <Search type="search" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel slides={slides} />
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 30, fontSize: 20 }}>
            Popular Categories
          </TextSemiBold>
          <Categories
            categoriesList={[
              "New Releases",
              "Antiques",
              "Self Care",
              "Gifts",
              "Household",
            ]}
            imagesList={[
              require("../assets/R1.png"),
              require("../assets/R2.png"),
              require("../assets/R3.png"),
              require("../assets/R4.png"),
              require("../assets/R5.png"),
            ]}
            category={["fashion", "craft", "selfcare", "gift", "homeandliving"]}
            navigation={navigation}
          />
        </View>
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 40, fontSize: 20 }}>
            Essentials
          </TextSemiBold>
          <RectangularComponent data={data} />
        </View>
        <View style={{ backgroundColor: "#92e3a9" }}>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 20, fontSize: 20 }}>
            Deals of the Day
          </TextSemiBold>
          <RectD data={dataDa} />
        </View>
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 40, fontSize: 20 }}>
            Best Sellers
          </TextSemiBold>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {currentproductdata.map((item) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Products", { id: item.id });
                }}
              >
                <BestSeller
                  id={item.id}
                  imageSource={item.images[0]}
                  title={item.name}
                  rating={item.rating}
                  numReviews={item.verified_buyers}
                  oldPrice={item.originalprice}
                  newPrice={item.priceafterdiscount}
                  discount={item.offerpercentage}
                />
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
