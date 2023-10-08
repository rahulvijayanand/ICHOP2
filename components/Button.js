import React from "react";
import {View,Text,TouchableOpacity} from "react-native"; 

const Button=(props)=>{
  return(
    <TouchableOpacity 
        style={{
          marginVertical: '10%',
          marginHorizontal: '5%',
          backgroundColor: 'black',
          padding: '3%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#92E38A',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
         {props.name}
        </Text>
      </TouchableOpacity>
  )
}
export default Button;