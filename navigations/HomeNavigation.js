import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Wishlist from "../screens/wishlist";
import HomeScreen from "../screens/home";
import ProductScreen from "../screens/Product";
import cartpage from "../screens/cartpage";
import Payments from "../screens/Payments";
import CategoRes from "../screens/CategoRes";
import FilterPage from "../screens/FilterPage";
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WishList" component={Wishlist} />
      <Stack.Screen name="CartPage" component={cartpage} />
      <Stack.Screen name="Payments" component={Payments} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Categores" component={CategoRes} />
      <Stack.Screen name="Filter" component={FilterPage} />
    </Stack.Navigator>
  );
}

export default HomeStack;
