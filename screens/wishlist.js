import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Text from "../fonts/Text";
import Location from "../components/Location";
import WishlistComp from "../components/WishlistComp";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
const { width, height } = Dimensions.get("window");

const wishlistcop = [
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
];

function Wishlist({ route, navigation }) {
  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;
  const [iswishlistlength, setwishlistlength] = useState(0);

  useEffect(() => {
    let len = 0;
    for (let i = 0; i < currentproductdata.length; i++) {
      if (currentproductdata[i].isliked) {
        len = len + 1;
      }
    }
    setwishlistlength(len);
  }, [currentproductdata]);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Location navigation={navigation} type="wishlist" />
      </View>
      {iswishlistlength == 0 && (
        <Image
          source={require("../assets/empty-wishlist.png")}
          style={{
            width: width * 1,
            height: height * 0.4,
            resizeMode: "cover",
            alignSelf: "center",
            top: 70,
          }}
        />
      )}

      {iswishlistlength == 0 && (
        <Text
          style={{
            color: "#0d98ba",
            alignSelf: "center",
            top: 100,
            opacity: 0.5,
          }}
        >
          Your Wishlist is Empty !
        </Text>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {currentproductdata.map(
          (item) =>
            item.isliked && (
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
            )
        )}
        <View style={{ marginBottom: 85 }}></View>
      </ScrollView>
    </View>
  );
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
