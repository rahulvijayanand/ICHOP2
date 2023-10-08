import React from "react";
import { StyleSheet, View, Image } from "react-native";
import star1 from "../assets/Star1.png";
import star2 from "../assets/Star2.png";

const RatingComponent = ({ rating }) => {
  const stars = [];
  const firstDigit = Math.floor(rating);
  const hasHalfStar = rating - firstDigit >= 0.5;

  for (let i = 0; i < firstDigit; i++) {
    stars.push(<Image key={i} style={styles.star} source={star1} />);
  }

  if (hasHalfStar) {
    stars.push(<Image key={firstDigit} style={styles.star} source={star2} />);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<Image key={i} style={styles.star} source={star2} />);
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  star: {
    width: 11.5,
    height: 11.5,
    resizeMode: "contain",
    marginRight: 2.5,
  },
});

export default RatingComponent;
