import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./BottomTabNavigation";

import AccountStack from "./AccountNavi";
import LoginNavi from "./LoginNavi";
import OrderSummary from "../screens/OrderSummary";
import MapScreen from "../screens/MapScreen";
const Stack = createStackNavigator();

function MainNavi() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginNavi" component={LoginNavi} />
      <Stack.Screen name="Navigation" component={Navigation} />

      <Stack.Screen name="AccountStack" component={AccountStack} />
      <Stack.Screen name="Ordersummary" component={OrderSummary} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MainNavi;
