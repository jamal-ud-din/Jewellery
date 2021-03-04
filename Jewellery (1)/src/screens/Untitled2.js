import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import CupertinoButtonGrey2 from "../components/CupertinoButtonGrey2";
import CupertinoButtonGrey3 from "../components/CupertinoButtonGrey3";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/necklace.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.mementum}>MEMENTUM</Text>
      <Text style={styles.loremIpsum}>All You Need is a Login and a Dream</Text>
      <Image
        source={require("../assets/images/OBJECTS.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
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
              Open the app and scan to {"\n"}unlock
            </Text>
          </View>
          <View style={styles.image5Row}>
            <Image
              source={require("../assets/images/Ellipse_6991.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Image
              source={require("../assets/images/Ellipse_700.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
            <Image
              source={require("../assets/images/Ellipse_7001.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
          </View>
          <CupertinoButtonGrey2
            style={styles.cupertinoButtonGrey2}
          ></CupertinoButtonGrey2>
        </ImageBackground>
        <CupertinoButtonGrey3
          style={styles.cupertinoButtonGrey3}
        ></CupertinoButtonGrey3>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#707070"
  },
  image: {
    width: 46,
    height: 46,
    marginTop: 40,
    marginLeft: 165
  },
  mementum: {
    fontFamily: "lemonada-regular",
    color: "#e0978b",
    width: 194,
    height: 27,
    fontSize: 27,
    textAlign: "center",
    marginTop: 35,
    marginLeft: 109
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#e0978b",
    width: 233,
    height: 29,
    textAlign: "left",
    opacity: 0.6,
    marginTop: 5,
    marginLeft: 96
  },
  image2: {
    width: 266,
    height: 281,
    marginTop: 18,
    marginLeft: 55
  },
  image3: {
    top: 1,
    left: 1,
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
    color: "#121212",
    width: 213,
    height: 41,
    fontSize: 16,
    marginLeft: 8
  },
  image4Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 101,
    marginLeft: 33,
    marginRight: 98
  },
  image5: {
    width: 10,
    height: 10
  },
  image6: {
    width: 10,
    height: 10,
    marginLeft: 2
  },
  image7: {
    width: 10,
    height: 10,
    marginLeft: 2
  },
  image5Row: {
    height: 10,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 170,
    marginRight: 171
  },
  cupertinoButtonGrey2: {
    height: 39,
    width: 302,
    borderRadius: 50,
    marginTop: 21,
    marginLeft: 36
  },
  cupertinoButtonGrey3: {
    height: 49,
    width: 375,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#e0978b",
    borderRadius: 19
  },
  image3Stack: {
    width: 376,
    height: 286,
    marginTop: 45,
    marginLeft: -1
  }
});

export default Untitled2;
