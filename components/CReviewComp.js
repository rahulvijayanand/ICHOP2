import React from "react";
import { View, StyleSheet } from "react-native";
import RatingComponent from "./RatingLarge";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const ReviewList = ({ reviews }) => {
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const formatDate = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <View>
      {sortedReviews.map((review) => (
        <View key={review.id} style={styles.reviewContainer}>
          <View style={styles.reviewDetails}>
            <TextSemiBold style={styles.customerName}>
              {review.name}
            </TextSemiBold>
            <View style={{ marginBottom: 3 }}>
              <RatingComponent rating={review.rating} starSize={18} />
            </View>
          </View>
          <View>
            <Text style={styles.reviewDate}>
              {formatDate(new Date(review.date))}
            </Text>
          </View>
          <View style={styles.reviewContent}>
            <Text style={styles.reviewText}>{review.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  reviewDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  customerName: {
    fontSize: 15,
    alignSelf: "flex-end",
  },
  reviewContent: {
    marginTop: 15,
    marginBottom: 10,
  },
  reviewDate: {
    marginRight: 10,
    fontSize: 12,
  },
  reviewText: {
    fontSize: 12,
  },
});

export default ReviewList;
