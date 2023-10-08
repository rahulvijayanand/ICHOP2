import * as React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Myacc from "../components/Myaccount";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
import Location from "../components/Location";
import firebase from "firebase/compat/app";

const Details = [
  {
    id: 1,
    title: "Profile",
    name: require("../assets/Group-301.png"),
    navi: "Account Screen",
  },
  {
    id: 2,
    title: "Address",
    name: require("../assets/Vector-9.png"),
    navi: "Account Screen",
  },
  {
    id: 3,
    title: "Orders",
    name: require("../assets/Group-1.png"),
    navi: "Orders",
  },
  {
    id: 4,
    title: "Saved Cards",
    name: require("../assets/Group-2.png"),
    navi: "Saved",
  },
  {
    id: 5,
    title: "Wishlist",
    name: require("../assets/Vector-10.png"),
    navi: "Wishlist",
  },
  {
    id: 6,

    title: "Manage Referrals",
    name: require("../assets/Group-300.png"),
    navi: "Account Screen",
  },
  {
    id: 7,
    title: "Notifications",
    name: require("../assets/Vector-11.png"),
    navi: "Notify",
  },
  {
    id: 8,
    title: "Terms & Policies",
    name: require("../assets/Vector-12.png"),
    navi: "Account Screen",
  },
  {
    id: 9,
    title: "Customer Support",
    name: require("../assets/Group302.png"),
    navi: "Account Screen",
  },
];
export default function Account({ navigation }) {
  async function handleSignOut() {
    try {
      await firebase.auth().signOut();
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight + 10,
        backgroundColor: "#fff",
      }}
    >
      <Location navigation={navigation} type="other" text="My Account" />
      <View
        style={{
          flexDirection: "row",
          marginVertical: "5%",
          alignItems: "center",
          paddingLeft: "23%",
          paddingTop: "4%",
          paddingBottom: "4%",
        }}
      >
        <View style={styles.profilepicContainer}>
          <Image
            style={styles.profilepic}
            source={require("../assets/profile.png")}
          />
        </View>
        <Pressable style={{ justifyContent: "center", width: "100%" }}>
          <TextSemiBold style={{ marginHorizontal: "3.5%", fontSize: 18 }}>
            Siva Sakthi
          </TextSemiBold>
          <TextSemiBold
            style={{ marginHorizontal: "3%", color: "#8C9F92", fontSize: 12 }}
          >
            +9197854XXXXX
          </TextSemiBold>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
        {Details.map((item, index) => (
          <Pressable onPress={() => navigation.navigate(item.navi)}>
            <Myacc name={item.name} title={item.title} navi={item.navi} />
          </Pressable>
        ))}
        <TouchableOpacity
          onPress={handleSignOut}
          style={{
            marginVertical: "7.5%",
            marginHorizontal: "5%",
            backgroundColor: "#263d2c",
            padding: "3%",
            borderRadius: 10,
          }}
        >
          <TextSemiBold
            style={{
              color: "#92E38A",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sign Out
          </TextSemiBold>
        </TouchableOpacity>
        <View style={{ marginBottom: 70 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profilepic: {
    height: 65,
    width: 65,
    borderWidth: 1,
    borderRadius: 50,
  },
  profilepicContainer: {
    width: 65,
    height: 65,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  display: {
    flexDirection: "row",
    marginLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: "4%",
    resizeMode: "contain",
  },
});
