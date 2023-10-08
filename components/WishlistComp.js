import React,{useContext,useEffect,useCallback} from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import RatingComponent from "./Rating";
import LikeButton from "./LikeButton";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";

const { width, height } = Dimensions.get("window");

const RectangularComponent = ({
  id,
  imageSource,
  title,
  ratings,
  numReviews,
  oldPrice,
  newPrice,
  discount,
  colors = [],
  type,
  navi,
  navigation,
}) => {
  const availableColors = colors.slice(0, 3);
  const moreColors = colors.slice(3);

  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;

  const modifyObject = useCallback((id, newvalue) => {
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
    <View
      style={{
        width: "100%",
        height: Dimensions.get("window").height / 4.3,
        backgroundColor: "#f6f6f6",
        justifyContent: "center",
        paddingLeft: 15,
        marginRight: 15,
        marginBottom:15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {type === "best" && (
          <View
            style={{
              width: 80,
              height: 20,
              backgroundColor: "#91e2a8",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              position: "absolute",
              zIndex: 1,
              top: 9,
              left: 5,
            }}
          >
            <TextSemiBold style={{ fontSize: 11 }}>Best Seller</TextSemiBold>
          </View>
        )}
        <Image
          source={{uri:imageSource}}
          style={{ width: "40%", height: "100%", borderRadius: 8 }}
          resizeMode="cover"
        />
        <View style={{ width: "60%", paddingHorizontal: 10 }}>
          <TextSemiBold style={{ fontSize: 12, width: 150 }}>
            {title}
          </TextSemiBold>
          <View style={{ flexDirection: "row" }}>
            <RatingComponent rating={ratings} />
            <TextSemiBold style={{ fontSize: 11.5, marginTop: 10 }}>
              {ratings}/5
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
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {availableColors.map((color, index) => (
              <View
                key={index}
                style={{
                  width: 12.5,
                  height: 12.5,
                  borderRadius: 12.5,
                  backgroundColor: color,
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: "#263d2c",
                }}
              />
            ))}
            {moreColors.length > 0 && (
              <TouchableOpacity
                style={{
                  width: 12.5,
                  height: 12.5,
                  borderRadius: 12.5,
                  backgroundColor: "white",
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#263d2c",
                }}
              >
                <TextSemiBold style={{ fontSize: 6 }}>
                  +{moreColors.length}
                </TextSemiBold>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              backgroundColor: currentproductdata[id].iscart?"white":"#263d2c",
              width: width * 0.39,
              height: height * 0.04,
              borderRadius: height * 0.01,
              justifyContent: "center",
              alignItems: "center",
              marginTop: height * 0.02,
            }}
            onPress={() => modifyObject(id, !currentproductdata[id].iscart)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    backgroundColor: "#263d2c",
    width: width * 0.39,
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
    marginLeft: width * 0.02,
  },
});

export default RectangularComponent;
