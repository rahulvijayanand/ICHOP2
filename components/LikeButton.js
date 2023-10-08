import React, { useState,useContext,useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image,View,StatusBar } from "react-native";
import Toast from "./Toast";
import { Constants } from "expo-constants";import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
const LikeButton = (props) => {

  const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;

  const [liked, setLiked] = useState(currentproductdata[props.id].isliked);

  const toggleLiked = (id,newValue) => {
    setLiked(newValue);
    setproductdata(currentproductdata =>
      currentproductdata.map((obj) =>
        obj.id === id ? { ...obj, isliked: newValue } : obj
      )
    );
  };

  return (
    <TouchableOpacity onPress={()=>toggleLiked(props.id,!currentproductdata[props.id].isliked)} style={styles.container}>
      <Image
        source={
          liked
            ? require("../assets/Vector-10.png")
            : require("../assets/Vector-2.png")
        }
        style={styles.icon}
      />
    </TouchableOpacity>
   

    
     
        
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});

export default LikeButton;
