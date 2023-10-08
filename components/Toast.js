import {useState,useEffect,useRef} from "react";
import {Animated,Text,View} from "react-native";



const Toast = (props) => {
    const opacity = useRef(new Animated.Value(0))
      .current;
  
    useEffect(() => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        
      });
    }, []);
  
    return (
      <Animated.View
        style={{
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 0],
                outputRange: [-200, 0],
              }),
            },
          ],
         position:"absolute",  
         
          marginBottom: 5,
          backgroundColor: '#46b031',
          padding: 10,
          borderRadius: 4,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 6,
          alignItems:"center"
        }}
      >
        <Text style={{color:"white",fontWeight:"bold"}}>Added to favourites</Text>
      </Animated.View>
    );
  };

  export default Toast;