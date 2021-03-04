import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Untitled6(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Rectangle_2900.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <ImageBackground
          source={require("../assets/images/Group_2577.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Image
            source={require("../assets/images/Group_2580.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </ImageBackground>
      </ImageBackground>
      <View style={styles.image4Row}>
        <Image
          source={require("../assets/images/keyboard_backspace-24px.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <View style={styles.image5Stack}>
          <Image
            source={require("../assets/images/qr_code_scanner-24px_(2).png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <Text style={styles.scanQrCode}>Scan QR Code</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0968b"
  },
  image: {
    width: 341,
    height: 408,
    marginTop: 192,
    marginLeft: 17
  },
  image_imageStyle: {},
  image2: {
    width: 242,
    height: 242,
    marginTop: 71,
    marginLeft: 50
  },
  image2_imageStyle: {},
  image3: {
    width: 179,
    height: 179,
    marginTop: 31,
    marginLeft: 31
  },
  image4: {
    width: 24,
    height: 24,
    marginTop: 3
  },
  image5: {
    top: 0,
    left: 216,
    width: 30,
    height: 30,
    position: "absolute"
  },
  scanQrCode: {
    top: 2,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#ffffff",
    width: 241,
    height: 25,
    fontSize: 21
  },
  image5Stack: {
    width: 246,
    height: 30,
    marginLeft: 71
  },
  image4Row: {
    height: 30,
    flexDirection: "row",
    marginTop: -575,
    marginLeft: 17,
    marginRight: 17
  }
});

export default Untitled6;
