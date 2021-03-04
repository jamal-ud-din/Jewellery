import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CupertinoButtonGrey4 from "../components/CupertinoButtonGrey4";

function Untitled5(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/necklace1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.mementum1}>MEMENTUM</Text>
      <Text style={styles.loremIpsum1}>
        All You Need is a Login and a Dream
      </Text>
      <CupertinoButtonGrey4
        style={styles.cupertinoButtonGrey4}
      ></CupertinoButtonGrey4>
      <Text style={styles.loremIpsum2}>
        Lorem ipsum dolor sit amet {"\n"}adipis. Nullam molestie {"\n"}gravida
        ante
      </Text>
      <Text style={styles.scanProduct}>Scan Product</Text>
      <Image
        source={require("../assets/images/Group_2581.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 46,
    height: 46,
    marginTop: 40,
    marginLeft: 166
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
  cupertinoButtonGrey4: {
    height: 39,
    width: 302,
    borderRadius: 50,
    backgroundColor: "#d99287",
    marginTop: 571,
    marginLeft: 37
  },
  loremIpsum2: {
    fontFamily: "montserrat-regular",
    color: "#424242",
    width: 256,
    height: 66,
    fontSize: 18,
    marginTop: -190,
    marginLeft: 60
  },
  scanProduct: {
    fontFamily: "montserrat-700",
    color: "#e0978b",
    fontSize: 24,
    width: 180,
    height: 29,
    textAlign: "center",
    marginTop: -133,
    marginLeft: 105
  },
  image2: {
    width: 339,
    height: 294,
    marginTop: -370,
    marginLeft: 18
  }
});

export default Untitled5;
