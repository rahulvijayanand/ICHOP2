import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    MetropolisB: require("../fonts/Metropolis-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RNText style={[{ fontFamily: "MetropolisB", color:"#263d2c" }, style]} {...rest} />;
};

export default Text;
