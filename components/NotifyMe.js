import { View, Image, TouchableOpacity, Dimensions, Share } from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const NotifyMe = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Share Functionality Testing",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };

  const [isnotify, setnotify] = useState(false);
  const handlepress = () => {
    setnotify(!isnotify);
  };
  return (
    <View
      style={{
        backgroundColor: "#d3f5d9",
        height: height * 0.69,
        width: width - 50,
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: height * 0.01,
        },
        shadowOpacity: 0.29,
        shadowRadius: height * 0.02,
      }}
    >
      <View
        style={{
          flex: 3.5,
          borderBottomWidth: 2,
          borderBottomColor: "#c2e3c8",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/antique.jpg")}
          style={{
            width: width - 80,
            height: 160,
            alignSelf: "center",
            borderRadius: 8,
          }}
        />
      </View>
      <View style={{ flex: 6 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextSemiBold
            style={{
              color: "#263d2c",
              fontSize: 24,
              marginTop: 15,
              marginLeft: 20,
            }}
          >
            Antique Collection
          </TextSemiBold>
          <TouchableOpacity onPress={onShare} activeOpacity={0.4}>
            <Image
              source={require("../assets/Vector-6.png")}
              style={{
                width: 28,
                height: 28,
                marginRight: 20,
                marginTop: 18,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 14,
            marginLeft: 20,
            marginTop: 15,
            marginRight: 20,
            textAlign:'justify',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <TextSemiBold
          style={{
            fontSize: 14,
            marginLeft: 20,
            marginTop: 10,
            marginRight: 20,
          }}
        >
          #comingsoon #antiques
        </TextSemiBold>
        <TouchableOpacity onPress={handlepress} activeOpacity={0.4}>
          <View
            style={{
              backgroundColor: !isnotify ? "#263d2c" : "white",
              height: 50,
              width: width - 80,
              alignSelf: "center",
              marginTop: 15,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <TextSemiBold
              style={{
                color: !isnotify ? "#92e3a9" : "#263d2c",
                fontSize: 18,
                alignSelf: "center",
                marginRight: 10,
              }}
            >
              {!isnotify ? "Notify Me" : "You'll Be Notified !"}
            </TextSemiBold>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotifyMe;
