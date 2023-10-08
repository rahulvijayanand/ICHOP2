import React, { useState, useEffect, useRef } from "react";
import { View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
      scrollViewRef.current.scrollTo({
        x: nextIndex * width,
        y: 0,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeIndex, images]);

  return (
    <View style={styles.carousel}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri:image}}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <View style={styles.navigation}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(255, 255, 255, 0.2)",
              },
              index === 0 && { marginLeft: 15 },
              index === images.length - 1 && { marginRight: 15 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: width,
    height: height / 2,
    position: "relative",
  },
  image: {
    width: width,
    height: height / 2,
  },
  navigation: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  dot: {
    width: 110,
    height: 6,
    borderRadius: 5,
    backgroundColor: "grey",
    marginHorizontal: 5,
  },
});

export default ImageCarousel;
