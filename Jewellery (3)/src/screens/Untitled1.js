import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/Group_435.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <ImageBackground
          source={require("../assets/images/bg_white.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.loremIpsum}>Personalized your jewelry</Text>
          <Text style={styles.loremIpsum2}>
            Never stop to buy a piece of jewellery.
          </Text>
          <View style={styles.cupertinoButtonInfo1Stack}>
            <CupertinoButtonInfo
              style={styles.cupertinoButtonInfo1}
            ></CupertinoButtonInfo>
            <CupertinoButtonInfo
              style={styles.cupertinoButtonInfo2}
            ></CupertinoButtonInfo>
          </View>
          <CupertinoButtonGrey1
            style={styles.cupertinoButtonGrey1}
          ></CupertinoButtonGrey1>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    left: 0,
    width: 375,
    height: 766,
    position: "absolute"
  },
  image2: {
    top: 423,
    left: 0,
    width: 375,
    height: 384,
    position: "absolute"
  },
  image2_imageStyle: {},
  loremIpsum: {
    fontFamily: "poppins-regular",
    color: "#121212",
    width: 208,
    height: 85,
    fontSize: 28,
    marginTop: 42,
    marginLeft: 73
  },
  loremIpsum2: {
    fontFamily: "poppins-regular",
    color: "#121212",
    width: 274,
    height: 20,
    marginTop: 11,
    marginLeft: 51
  },
  cupertinoButtonInfo1: {
    height: 52,
    width: 327,
    position: "absolute",
    top: 0,
    backgroundColor: "#e0978b",
    left: 0
  },
  cupertinoButtonInfo2: {
    height: 52,
    width: 327,
    position: "absolute",
    top: 0,
    backgroundColor: "#e0978b",
    left: 0,
    borderRadius: 54,
    borderWidth: 0,
    borderColor: "#000000"
  },
  cupertinoButtonInfo1Stack: {
    width: 327,
    height: 52,
    marginTop: 34,
    marginLeft: 24
  },
  cupertinoButtonGrey1: {
    height: 52,
    width: 327,
    backgroundColor: "rgba(255,254,254,1)",
    borderWidth: 1,
    borderColor: "#feb79b",
    marginTop: 20,
    marginLeft: 24
  },
  imageStack: {
    width: 375,
    height: 807,
    marginTop: 5
  }
});

export default Untitled1;
