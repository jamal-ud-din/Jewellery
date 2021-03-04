import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import CupertinoButtonGrey2 from "../components/CupertinoButtonGrey2";
import CupertinoButtonGrey3 from "../components/CupertinoButtonGrey3";

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/necklace.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.mementum1}>MEMENTUM</Text>
      <Text style={styles.loremIpsum1}>
        All You Need is a Login and a Dream
      </Text>
      <View style={styles.image3Stack}>
        <ImageBackground
          source={require("../assets/images/Rectangle_2776.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <View style={styles.image4Row}>
            <ImageBackground
              source={require("../assets/images/Ellipse_696.png")}
              resizeMode="contain"
              style={styles.image4}
              imageStyle={styles.image4_imageStyle}
            >
              <Text style={styles.loremIpsum2}>1</Text>
            </ImageBackground>
            <Text style={styles.loremIpsum3}>
              Add Special Moments and{"\n"}loving messages.
            </Text>
          </View>
          <View style={styles.image7Row}>
            <Image
              source={require("../assets/images/Ellipse_7001.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
            <Image
              source={require("../assets/images/Ellipse_700.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
            <Image
              source={require("../assets/images/Ellipse_6991.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
          </View>
          <CupertinoButtonGrey2
            style={styles.cupertinoButtonGrey1}
          ></CupertinoButtonGrey2>
        </ImageBackground>
        <CupertinoButtonGrey3
          scanToUnlock="Make it Meaningful"
          style={styles.cupertinoButtonGrey2}
        ></CupertinoButtonGrey3>
      </View>
      <Image
        source={require("../assets/images/moments.png")}
        resizeMode="contain"
        style={styles.image8}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    width: 46,
    height: 46,
    marginTop: 40,
    marginLeft: 165
  },
  mementum1: {
    fontFamily: "lemonada-regular",
    color: "#e0978b",
    width: 194,
    height: 27,
    fontSize: 27,
    textAlign: "center",
    marginTop: 35,
    marginLeft: 109
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#e0978b",
    width: 233,
    height: 29,
    textAlign: "left",
    opacity: 0.6,
    marginTop: 5,
    marginLeft: 96
  },
  image3: {
    top: 1,
    left: 0,
    width: 375,
    height: 285,
    position: "absolute"
  },
  image3_imageStyle: {},
  image4: {
    width: 23,
    height: 23,
    marginTop: 9
  },
  image4_imageStyle: {},
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    width: 12,
    height: 18,
    textAlign: "left",
    marginTop: 3,
    marginLeft: 9
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#777887",
    width: 213,
    height: 41,
    fontSize: 16,
    marginLeft: 8
  },
  image4Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 101,
    marginLeft: 34,
    marginRight: 97
  },
  image7: {
    width: 10,
    height: 10
  },
  image6: {
    width: 10,
    height: 10,
    marginLeft: 2
  },
  image5: {
    width: 10,
    height: 10,
    marginLeft: 2
  },
  image7Row: {
    height: 10,
    flexDirection: "row",
    marginTop: 53,
    marginLeft: 172,
    marginRight: 169
  },
  cupertinoButtonGrey1: {
    height: 39,
    width: 302,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 37
  },
  cupertinoButtonGrey2: {
    height: 49,
    width: 375,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#e0978b",
    borderRadius: 19
  },
  image3Stack: {
    width: 375,
    height: 286,
    marginTop: 344,
    marginLeft: -1
  },
  image8: {
    width: 309,
    height: 319,
    marginTop: -627,
    marginLeft: 33
  }
});

export default Untitled4;
