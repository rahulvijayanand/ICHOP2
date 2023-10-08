import { View, StyleSheet, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
const OtpVerified = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Navigation");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#92e3a9"} barStyle={"dark-content"} />
      <Image
        source={require("../assets/Onboarding-3.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.back}>
        <Image
          source={require("../assets/Vector-30.png")}
          style={styles.icon1}
        />
        <Image
          source={require("../assets/Vector-31.png")}
          style={[
            styles.icon1,
            { position: "absolute", left: 20, top: 15, width: 50, height: 50 },
          ]}
        />
        <TextSemiBold style={styles.text}>
          OTP Verified Successfully
        </TextSemiBold>
      </View>
      <View style={styles.bottom}>
        <Image
          source={require("../assets/Asterisk-1.png")}
          style={styles.image}
        />
        <TextSemiBold style={styles.text2}>Phaila</TextSemiBold>
      </View>
    </View>
  );
};

export default OtpVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  icon1: {
    width: 70,
    height: 70,
    top: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#92e3a9",
    marginTop: 40,
    fontSize: 35,
  },
  back: {
    marginLeft: 50,
    marginRight: 50,
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  bottom: {
    position: "absolute",
    bottom: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    flex: 1,
  },
  text2: {
    fontSize: 16,
    color: "#92e3a9",
    marginLeft: 5,
  },
});
