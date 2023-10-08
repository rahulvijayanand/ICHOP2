import { View, Image, TouchableOpacity, Dimensions, Share } from "react-native";
import { React, useState } from "react";
const { width, height } = Dimensions.get("window");
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const ReadMore = () => {
  const [isreadmore, setreadmore] = useState(false);
  const handlepress = () => {
    setreadmore(!isreadmore);
  };

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

  return (
    <View
      style={{
        backgroundColor: "white",
        height: isreadmore ? height * 0.84 : height * 0.64,
        width: width - 50,
        alignSelf: "center",
        marginTop: 30,
        borderWidth: 1,
        borderColor: "#263d2c",
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
          borderBottomWidth: 2,
          borderBottomColor: "white",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../assets/ReadMore.jpg")}
          style={{
            width: width - 80,
            height: 160,
            alignSelf: "center",
            borderRadius: 8,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ flex: 6 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#263d2c",
              fontSize: 20.5,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Listen what Anush
            {"\n"}Thinks About <TextSemiBold>"Phaila"</TextSemiBold>
          </Text>
          <TouchableOpacity onPress={onShare} activeOpacity={0.4}>
            <Image
              source={require("../assets/Vector-6.png")}
              style={{
                width: 28,
                height: 28,
                marginRight: 20,
                alignSelf: "center",
                resizeMode: "contain",
                tintColor: "#8c9f92",
                marginTop: 10,
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
            textAlign: "justify",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
          {!isreadmore
            ? "..."
            : ".Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}
        </Text>
        <TouchableOpacity onPress={handlepress} activeOpacity={0.4}>
          <View
            style={{
              backgroundColor: !isreadmore ? "#92e3a9" : "#eeeeee",
              height: 50,
              width: width - 80,
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <TextSemiBold
              style={{
                color: "#263d2c",

                fontSize: 18,
                alignSelf: "center",
                marginRight: 10,
              }}
            >
              {isreadmore ? "Read Less" : "Read More"}
            </TextSemiBold>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadMore;
