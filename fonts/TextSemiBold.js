import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisSB: require("../fonts/Metropolis-SemiBold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RNText
      style={[{ fontFamily: "MetropolisSB", color: "#263d2c" }, style]}
      {...rest}
    />
  );
};

export default Text;
