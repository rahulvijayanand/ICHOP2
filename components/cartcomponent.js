import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useContext, useCallback } from "react";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
const { width, height } = Dimensions.get("window");

const Cartcomponent = ({
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
  navigation
}) => {
  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;

  const modifyObject = useCallback((id) => {
    const updatedList = [...currentproductdata];
    updatedList[id] = {
      ...updatedList[id],
      iscart: false,
    };
    setproductdata(updatedList);
  },[currentproductdata]);

  const ChangeCounter = useCallback(
    (id, newValue) => {
      setproductdata((currentproductdata) =>
        currentproductdata.map((obj) =>
          obj.id === id ? { ...obj, count: newValue } : obj
        )
      );
    },
    [currentproductdata]
  );

  return (
    <View
      style={{
        paddingVertical: 10,
        width: width,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{ width: width * 0.2, height: height * 0.1, marginLeft: 15 }}
      >
        <Image
          source={{ uri: imageSource }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 8,
            resizeMode: "cover",
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{ flexDirection: "column", marginLeft: 15, width: width * 0.5 }}
      >
        <TouchableOpacity onPress={() => {navigation.navigate("Products",{id:id})}}>
        <Text style={{ color: "black" }}>{title}</Text>
        <Text
          style={{
            color: "black",
            fontSize: 12,
            fontColor: "#eeeeee",
            opacity: 0.5,
            marginTop: 10,
          }}
        >
          {currentproductdata[id].variants[0].variantname}...
        </Text>
        </TouchableOpacity>
        <View
          style={{
            width: width * 0.2,
            height: 30,
            backgroundColor: "white",
            marginTop: 10,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <TouchableOpacity
            onPress={() => ChangeCounter(id, parseInt(currentproductdata[id].count) - 1)}
          >
            <Text style={{
                fontSize: 26,
                alignSelf: "center",
                bottom: 4,
                color: "gray",
              }}>
              -
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 14, alignSelf: "center" }}>{currentproductdata[id].count}</Text>
          <TouchableOpacity onPress={() => ChangeCounter(id, parseInt(currentproductdata[id].count) + 1)}>
            <Text
              style={{ fontSize: 18, alignSelf: "center", color: "gray" ,top:2}}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          marginLeft: 8,
        }}
      >
        <TouchableOpacity onPress={() => modifyObject(id)}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.1,
              marginLeft: 38,
              top: 4,
            }}
          >
            <Image
              source={require("../assets/into.png")}
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                resizeMode: "cover",
              }}
            />
          </View>
        </TouchableOpacity>

        <TextSemiBold style={{ fontSize: 18 }}>
          ₹{newPrice * currentproductdata[id].count}
        </TextSemiBold>
      </View>
    </View>
  );
};

export default Cartcomponent;
