import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Keyboard,
  StatusBar,
  Image,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const OtpPage = ({ route }) => {
  const { verificationId, phoneNumber } = route.params;
  const navigation = useNavigation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [code, setCode] = useState("");
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");
  const recaptchaVerifier = useRef(null);
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  const confirmCode = () => {
    if (!verificationId) {
      alert("Please enter verification code first.");
      return;
    }
    const verificationCode = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode,
      code
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setDigit1("");
        setDigit2("");
        setDigit3("");
        setDigit4("");
        setDigit5("");
        setDigit6("");
        navigation.navigate("OTPV");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDigitChange = (index, value) => {
    switch (index) {
      case 1:
        setDigit1(value);
        if (value) {
          digit2Ref.current.focus();
        }
        break;
      case 2:
        setDigit2(value);
        if (value) {
          digit3Ref.current.focus();
        } else {
          digit1Ref.current.focus();
        }
        break;
      case 3:
        setDigit3(value);
        if (value) {
          digit4Ref.current.focus();
        } else {
          digit2Ref.current.focus();
        }
        break;
      case 4:
        setDigit4(value);
        if (value) {
          digit5Ref.current.focus();
        } else {
          digit3Ref.current.focus();
        }
        break;
      case 5:
        setDigit5(value);
        if (value) {
          digit6Ref.current.focus();
        } else {
          digit4Ref.current.focus();
        }
        break;
      case 6:
        setDigit6(value);
        if (!value) {
          digit5Ref.current.focus();
        }
        break;
    }
  };

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

  const handleVerificationCodeChange = () => {
    const verificationCode =
      digit1 + digit2 + digit3 + digit4 + digit5 + digit6;
    setCode(verificationCode);
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
      <TextSemiBold style={styles.otpText}>OTP Verification</TextSemiBold>
      <Text
        style={{
          color: "#fff",
          marginLeft: 30,
          fontSize: 16,
          marginBottom: 30,
        }}
      >
        OTP has been sent to +91******{phoneNumber.slice(-4)}
      </Text>
      <View style={styles.verificationCodeInputContainer}>
        <TextInput
          maxLength={1}
          style={styles.verificationCodeInput}
          onChangeText={(value) => {
            handleDigitChange(1, value);
            handleVerificationCodeChange();
          }}
          value={digit1}
          ref={digit1Ref}
        />
        <TextInput
          maxLength={1}
          style={styles.verificationCodeInput}
          onChangeText={(value) => {
            handleDigitChange(2, value);
            handleVerificationCodeChange();
          }}
          value={digit2}
          ref={digit2Ref}
        />
        <TextInput
          maxLength={1}
          style={styles.verificationCodeInput}
          onChangeText={(value) => {
            handleDigitChange(3, value);
            handleVerificationCodeChange();
          }}
          value={digit3}
          ref={digit3Ref}
        />
        <TextInput
          maxLength={1}
          style={styles.verificationCodeInput}
          onChangeText={(value) => {
            handleDigitChange(4, value);
            handleVerificationCodeChange();
          }}
          value={digit4}
          ref={digit4Ref}
        />
        <TextInput
          maxLength={1}
          style={styles.verificationCodeInput}
          onChangeText={(value) => {
            handleDigitChange(5, value);
            handleVerificationCodeChange();
          }}
          value={digit5}
          ref={digit5Ref}
        />
        <TextInput
          maxLength={1}
          style={styles.verificationCodeInput}
          onChangeText={(value) => {
            handleDigitChange(6, value);
            handleVerificationCodeChange();
          }}
          value={digit6}
          ref={digit6Ref}
        />
      </View>
      <TouchableOpacity
        onPress={confirmCode}
        style={[styles.loginButton, { backgroundColor: "#92e3a9" }]}
      >
        <TextSemiBold style={styles.buttonText}>Verify</TextSemiBold>
      </TouchableOpacity>
      {!keyboardOpen && (
        <View style={[styles.bottom, { bottom: 100 }]}>
          <Text style={styles.tex1}>Didn't Recieve Code?</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <TextSemiBold style={[styles.text, { fontSize: 14 }]}>
              Resend
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

export default OtpPage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
  },

  buttonText: {
    color: "#263d2c",
    fontSize: 20,
  },
  otpText: {
    fontSize: 35,
    color: "#92e3a9",
    marginBottom: 20,
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
  verificationCodeInputContainer: {
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28,
  },
  verificationCodeInput: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    borderColor: "#92e3a9",
    borderWidth: 1,
    textAlign: "center",
    marginRight: 5,
    marginLeft: 5,
    fontSize: 24,
    color: "#92e3a9",
    marginBottom: 50,
    fontFamily: "MetropolisSB",
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
