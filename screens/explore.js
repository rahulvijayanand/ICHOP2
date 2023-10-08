import React from "react";
import { Image, StyleSheet, View, StatusBar, _ScrollView } from "react-native";
import Text from "../fonts/Text";
import NotifyMe from "../components/NotifyMe";
import ReadMore from "../components/ReadMore";
import OtherPosts from "../components/OtherPosts";
import { ScrollView } from "react-native-gesture-handler";
import Location from "../components/Location";

function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Location navigation={navigation} type="explore" />
      <View style={{ height: 20 }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NotifyMe />
        <ReadMore />
        <OtherPosts />
      </ScrollView>
    </View>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
