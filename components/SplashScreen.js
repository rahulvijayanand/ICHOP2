import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [logoAngle, setLogoAngle] = useState(new Animated.Value(0));
  const pages = [
    {
      title: "Explore Many Products",
      description:
        "Select wide range of products from fresh fruits to delicious snacks and natural, handmade products directly from farm.",
      image: require("../assets/Onboarding-1.png"),
    },
    {
      title: "Hassle Free Payments",
      description:
        "Pay as per your convenience, we accept all credit and debit cards.",
      image: require("../assets/Onboarding-2.png"),
    },
    {
      title: "Product Delivery",
      description: "Your products are delivered home safely & securely.",
      image: require("../assets/Onboarding-3.png"),
    },
  ];

  useEffect(() => {
    Animated.timing(logoAngle, {
      toValue: currentPage * -145,
      duration: 500, // adjust duration as needed
      useNativeDriver: true,
    }).start(); // update logo angle with animation
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFinish = () => {
    // Handle finish logic here
  };

  const handleSkip = () => {
    // Handle skip logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} translucent />
      <Animated.Image
        source={require("../assets/Asterisk-1.png")}
        style={[
          styles.logo,
          {
            transform: [
              {
                rotate: logoAngle.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          },
        ]}
      />
      <Image source={pages[currentPage].image} style={styles.backgroundImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{pages[currentPage].title}</Text>
        <Text style={styles.description}>{pages[currentPage].description}</Text>
      </View>
      <View style={styles.dotContainer}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentPage && styles.activeDot]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={currentPage === pages.length - 1 ? handleFinish : handleNext}
      >
        <Text style={styles.buttonText}>
          {currentPage === pages.length - 1 ? "Get Started" : "Continue"}
        </Text>
      </TouchableOpacity>
      {currentPage !== pages.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    position: "absolute",
    top: -40,
    left: -80,
    width: 200,
    height: 200,
    zIndex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#92e3a9",
    width: 260,
  },
  description: {
    fontSize: 17,
    color: "#92e3a9",
    width: 300,
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: 30,
    marginLeft: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: "#92e3a9",
  },
  activeDot: {
    backgroundColor: "#92e3a9",
  },
  button: {
    backgroundColor: "#92e3a9",
    paddingVertical: 10,
    borderRadius: 4,
    bottom: 80,
    width: 300,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
  },
  buttonText: {
    color: "#263d2c",
    fontSize: 17,
    fontWeight: "bold",
  },
  skipButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  skipButtonText: {
    fontSize: 16,
    color: "#92e3a9",
  },
});

export default OnboardingScreen;
