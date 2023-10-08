import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisL: require("../fonts/Metropolis-Thin.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <RNText
      style={[{ fontFamily: "MetropolisL", color: "#263d2c" }, style]}
      {...rest}
    />
  );
};

export default Text;
