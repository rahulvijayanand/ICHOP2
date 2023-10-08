import React,{useState} from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Text from "../fonts/Text";
import HomeStack from "./HomeNavigation";
import AccountScreen from "../screens/account";
import CategoriesScreen from "../screens/categories";
import CategoryStack from "./CategoryNavigation";
import ExploreStack from "./ExploreNavigation";
import { productcontext } from "../Context/context";
import productdata from "../productdata.json";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import AccountStack from "./AccountNavi";
const Tab = createBottomTabNavigator();

export default function Navigation({ navigation }) {
  const[currentproductdata,setproductdata]=useState(productdata);
  return (
    <productcontext.Provider value={{product:[currentproductdata,setproductdata]}}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#263d2c",
          position: "absolute",
          bottom: 20,
          marginHorizontal: 20,
          borderTopWidth: 0,
          height: 70,
          borderRadius: 35,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 15,
        },
        labelStyle: {
          bottom: 10,
        },
        activeTintColor: "#92e3a9",
        inactiveTintColor: "#637368",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.Centre}>
              <Image
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? "#92e3a9" : "#637368",
                  },
                ]}
                source={require("../assets/Home.png")}
              />
              <Text
                style={[
                  styles.txt,
                  {
                    color: focused ? "#92e3a9" : "#637368",
                  },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Explore"}
        component={ExploreStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.Centre}>
              <Image
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? "#92e3a9" : "#637368",
                  },
                ]}
                source={require("../assets/Asterisk.png")}
              />
              <Text
                style={[
                  styles.txt,
                  {
                    color: focused ? "#92e3a9" : "#637368",
                  },
                ]}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Categories"}
        component={CategoryStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.Centre}>
              <Image
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? "#92e3a9" : "#637368",
                  },
                ]}
                source={require("../assets/Categories.png")}
              />
              <Text
                style={[
                  styles.txt,
                  {
                    color: focused ? "#92e3a9" : "#637368",
                  },
                ]}
              >
                Categories
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Account"}
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.Centre}>
              <Image
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? "#92e3a9" : "#637368",
                  },
                ]}
                source={require("../assets/Account.png")}
              />
              <Text
                style={[
                  styles.txt,
                  {
                    color: focused ? "#92e3a9" : "#637368",
                  },
                ]}
              >
                Account
              </Text>
            </View>
          ),
          
        }}
      ></Tab.Screen>
    </Tab.Navigator>
    </productcontext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  Centre: {
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 12,
    marginTop: 5,
  },
});
