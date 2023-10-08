import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
  Alert,
  Linking,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
let containerHeight = 350,
  containerWidth = 300;

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  });
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const App = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    if (!amount || isNaN(amount)) {
      Alert.alert("Invalid amount", "Please enter a valid numerical amount.");
    } else {
      const upiUrl = `upi://pay?pa=vijayrahs@okhdfcbank&pn=Vijay Anand&tn=Payment&am=${amount}`;
      Linking.openURL(upiUrl)
        .then(() => {
          // Payment app opened successfully
        })
        .catch((error) => {
          Alert.alert(
            "Error",
            "Unable to open UPI app. Please make sure you have a UPI app installed."
          );
        });
    }
  };

  const handleImageLayout = (event) => {
    const { x, y } = event.nativeEvent.layout;
    setImagePosition({ x, y });
  };

  return (
    <View style={{ flex: 1 }}>
     

      <ModalPoup visible={visible}>
        <View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/tickmark.png")}
                  style={{ height: 100, width: 100 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              right: -containerWidth + 35,
              top: -containerHeight / 4.25,
            }}
          >
            <ImageBackground
              onLayout={handleImageLayout}
              source={require("../assets/orange.png")}
              style={{
                height: 25,
                width: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="cross"
                size={24}
                color="white"
                onPress={() => setVisible(false)}
              />
            </ImageBackground>
          </View>
          <TextSemiBold
            style={{
              marginTop: "2%",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Woohoo!
          </TextSemiBold>

          <TextSemiBold style={{ fontSize: 17, textAlign: "center" }}>
            Your Order has been placed
          </TextSemiBold>
          <View
            style={{
              marginTop: "5%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}> Thank you for your purchase</Text>
          </View>
          <Text
            style={{ marginVertical: 10, fontSize: 12, textAlign: "center" }}
          >
            Your Order ID is:
            <TextSemiBold style={{}}> 123456789100</TextSemiBold>
          </Text>
          <View style={{ marginHorizontal: "3%" }}>
            <Text style={{ fontSize: 11.5, textAlign: "center" }}>
              You will receive an order confirmation{" "}
            </Text>
          </View>
          <Text style={{ fontSize: 11.5, textAlign: "center" }}>
            email with details of your order
          </Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomeScreen"), setVisible(false);
              }}
              style={{
                height: 50,
                width: "80%",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FF7000",
                bottom: -50,
              }}
            >
              <TextSemiBold style={{ fontSize: 18, color: "white" }}>
                Continue Shopping
              </TextSemiBold>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: containerWidth,
    height: containerHeight,
    backgroundColor: "#92E3A9",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
});

export default App;
