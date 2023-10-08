import React, { useContext,useCallback,useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
import RatingComponent from "./Rating";
import LikeButton from "./LikeButton";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TouchableNativeFeedback } from "react-native-web";
import { useSafeAreaFrame } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");


const BestSeller = ({
  id,
  title,
  rating,
  numReviews,
  oldPrice,
  newPrice,
  discount,
  imageSource,
}) => {
  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;
  const modifyObject = useCallback
  ((id, newvalue) => {
    const updatedList = [...currentproductdata];
    updatedList[id] = {
      ...updatedList[id],
      iscart: newvalue,
    };
    setproductdata(updatedList);
  },[currentproductdata]);

  const Renderlikebutton=()=>{
    return (
      <LikeButton id={id}/>
    );
  }
  useEffect(() => {
   Renderlikebutton();
  }, [currentproductdata]);

  
  

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={{ uri: imageSource }} style={styles.image} />
        <View
          style={{
            width: 80,
            height: 20,
            backgroundColor: "#91e2a8",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            position: "absolute",
            top: 12,
            left: 12,
          }}
        >
          <TextSemiBold style={{ fontSize: 11 }}>Best Seller</TextSemiBold>
        </View>
        <TextSemiBold style={{ fontSize: 12, marginTop: 14 }}>
          {title}
        </TextSemiBold>
        <View style={{ flexDirection: "row" }}>
          <RatingComponent rating={rating} />
          <TextSemiBold style={{ fontSize: 11.5, marginTop: 10 }}>
            {rating}/5
          </TextSemiBold>
          <Text
            style={{
              fontSize: 11.5,
              marginTop: 10,
              color: "#b2c4b8",
              marginLeft: 2.5,
            }}
          >
            ({numReviews})
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 11.5,
              marginTop: 10.5,
              color: "#b2c4b8",
              textDecorationLine: "line-through",
              justifyContent: "center",
            }}
          >
            ₹{oldPrice}
          </Text>
          <TextSemiBold
            style={{ fontSize: 12.5, marginTop: 10, marginLeft: 5 }}
          >
            ₹{newPrice}
          </TextSemiBold>
          <TextSemiBold
            style={{
              fontSize: 11.5,
              marginTop: 10.5,
              marginLeft: 5,
              color: "#91e2a8",
            }}
          >
            {discount}% off
          </TextSemiBold>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              backgroundColor: currentproductdata[id].iscart?"white":"#263d2c",
              width: width * 0.29,
              height: height * 0.04,
              borderRadius: height * 0.01,
              justifyContent: "center",
              alignItems: "center",
              marginTop: height * 0.02,
            }}
            onPress={() => {modifyObject(id,!currentproductdata[id].iscart)}}
          >
            {!currentproductdata[id].iscart && (
              <TextSemiBold
                style={{
                  fontSize: 12,
                  color: "#91e2a8",
                }}
              >
                Add to Cart
              </TextSemiBold>
            )}
            {currentproductdata[id].iscart && (
              <TextSemiBold
                style={{
                  fontSize: 12,
                  color: "#263d2c",
                }}
              >
                Remove
              </TextSemiBold>
            )}
          </TouchableOpacity>

          <View style={styles.like}>
            <Renderlikebutton/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: height * 0.05,
  },
  container: {
    backgroundColor: "#e9f9ee",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: height * 0.01,
    },
    shadowOpacity: 0.29,
    shadowRadius: height * 0.02,
    elevation: 7,
    paddingHorizontal: width * 0.02,
    width: width * 0.43,
    height: height * 0.41,
    marginLeft: 18,
  },
  image: {
    width: width * 0.4,
    height: height * 0.2,
    borderRadius: 10,
    marginTop: height * 0.01,
    resizeMode: "contain",
    alignSelf: "center",
  },
  cart: {
    backgroundColor: "#263d2c",
    width: width * 0.29,
    height: height * 0.04,
    borderRadius: height * 0.01,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  like: {
    backgroundColor: "#c7f0d2",
    height: height * 0.04,
    width: height * 0.04,
    marginTop: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * 0.01,
    marginLeft: width * 0.01,
  },
});

export default BestSeller;
