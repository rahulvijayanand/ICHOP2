import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SavedCards from "../screens/Savedcards";
import Myacc from "../screens/account";
import Generalinfo from "../screens/Generalinfo";
import Wishlist from "../screens/wishlist";
import ProductScreen from "../screens/Product";
import Notification from "../screens/Notification";
import Tracking from "../screens/Tracking";
import OrderSummary from "../screens/OrderSummary";
import Orders from "../screens/Orders";
const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account Screen" component={Myacc} />
      <Stack.Screen name="Saved" component={SavedCards} />
      <Stack.Screen name="Generalinfo" component={Generalinfo} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Notify" component={Notification} />
      <Stack.Screen name="Tracking" component={Tracking} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
      <Stack.Screen name="Ordersummary" component={OrderSummary} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}

export default AccountStack;
