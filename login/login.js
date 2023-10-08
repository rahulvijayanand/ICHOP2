import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  Keyboard,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const PhoneNumberInput = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const recaptchaVerifier = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then((id) => {
        setVerificationId(id);
        navigation.navigate("OTP", {
          verificationId: id,
          phoneNumber: phoneNumber,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#92e3a9"} barStyle={"dark-content"} />
      <Image
        source={require("../assets/Onboarding-3.png")}
        style={styles.backgroundImage}
      />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={{ marginBottom: 50 }}>
        <TextSemiBold style={styles.otpText}>Login</TextSemiBold>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#263d2c",
            borderWidth: 1,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 35,
            marginBottom: 35,
          }}
        >
          <Feather
            name="phone"
            size={20}
            color="#263d2c"
            style={styles.icon1}
          />
          <TextInput
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoCompleteType="tel"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={sendVerification}
          style={[
            styles.loginButton,
            { backgroundColor: phoneNumber ? "#92e3a9" : "#c7c7c7" },
          ]}
          disabled={!phoneNumber}
        >
          <TextSemiBold style={styles.buttonText}>Get OTP</TextSemiBold>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Navigation")}
          activeOpacity={0.5}
          style={[
            styles.loginButton,
            {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#92e3a9",
            },
          ]}
        >
          <TextSemiBold style={[styles.buttonText, { color: "#92e3a9" }]}>
            Skip Login
          </TextSemiBold>
        </TouchableOpacity>
      </View>
      {!keyboardOpen && (
        <View style={[styles.bottom, { bottom: 100 }]}>
          <Text style={styles.tex1}>Don't have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Signup")}
          >
            <TextSemiBold style={[styles.text, { fontSize: 14 }]}>
              Sign up
            </TextSemiBold>
          </TouchableOpacity>
        </View>
      )}
      {!keyboardOpen && (
        <View style={styles.bottom}>
          <Image
            source={require("../assets/Asterisk-1.png")}
            style={styles.image}
          />
          <TextSemiBold style={styles.text}>Phaila</TextSemiBold>
        </View>
      )}
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    height: 60,
    color: "#263d2c",
    paddingLeft: 20,
    fontFamily: "MetropolisRegular",
  },
  buttonText: {
    color: "#263d2c",
    fontSize: 20,
  },
  otpText: {
    fontSize: 40,
    color: "#92e3a9",
    marginBottom: 5,
    marginLeft: 30,
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
    marginLeft: 20,
    marginTop: 20,
  },
  loginButton: {
    borderRadius: 10,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 25,
    width: 25,
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
  text: {
    fontSize: 16,
    color: "#92e3a9",
    marginLeft: 5,
  },
  tex1: {
    color: "#fff",
  },
});
