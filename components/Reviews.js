import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const CustomerReviews = ({ totalReviews, ratings }) => {
  const maxRatingCount = Math.max(...Object.values(ratings));
  const ratingCounts = Object.entries(ratings);
  const topFiveRatings = ratingCounts.sort((a, b) => b[0] - a[0]).slice(0, 5);

  return (
    <View style={styles.container}>
      <View style={styles.ratingsContainer}>
        <View>
          {topFiveRatings.map(([rating, count]) => (
            <View key={rating} style={styles.ratingContainer}>
              <Text style={styles.ratingCount}>{rating}</Text>
              <View style={styles.ratingLineContainer}>
                <View style={[styles.totalReviewsLine, { width: "100%" }]} />
                <View
                  style={[
                    styles.mostDoneLine,
                    { width: (count / totalReviews) * 100 + "%" },
                  ]}
                />
              </View>
              <Text style={styles.rating}>{count}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  totalReviews: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ratingsContainer: {
    flexDirection: "row",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  ratingCount: {
    width: 20,
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    marginRight: 10,
  },
  ratingCountLabel: {
    fontSize: 12,
  },
  ratingLineContainer: {
    height: 5,
    width: "77.5%",
    borderRadius: 10,
    overflow: "hidden",
  },
  totalReviewsLine: {
    height: "100%",
    backgroundColor: "#b2c4b8",
    borderRadius: 10,
  },
  mostDoneLine: {
    height: "100%",
    backgroundColor: "#92e3a9",
    borderRadius: 10,
    position: "absolute",
  },
  rating: {
    fontSize: 10,
    marginLeft: 10,
  },
});

export default CustomerReviews;
