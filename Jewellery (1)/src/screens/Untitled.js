import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Group_262.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <CupertinoButtonInfo
        signIn="Sign In"
        style={styles.cupertinoButtonInfo}
      ></CupertinoButtonInfo>
      <Text style={styles.loremIpsum}>
        Your account has been {"\n"}created successfully!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 338,
    height: 224,
    marginTop: 182,
    marginLeft: 19
  },
  cupertinoButtonInfo: {
    height: 42,
    width: 265,
    backgroundColor: "#777887",
    borderRadius: 50,
    marginTop: 205,
    marginLeft: 55
  },
  loremIpsum: {
    fontFamily: "poppins-regular",
    color: "#7b7b7b",
    width: 250,
    height: 60,
    fontSize: 21,
    marginTop: -160,
    marginLeft: 63
  }
});

export default Untitled;
