import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../login/login";
import OTP from "../login/otp";
import OtpVerified from "../login/otpverified";
import Signup from "../login/signup";
const Stack = createStackNavigator();

function LoginNavi() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="OTPV" component={OtpVerified} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default LoginNavi;
