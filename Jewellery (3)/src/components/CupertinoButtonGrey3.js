import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.scanToUnlock}>
        {props.scanToUnlock || "Scan to unlock"}
      </Text>
      <Text style={styles.loremIpsum}>{props.loremIpsum || ""}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  scanToUnlock: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "montserrat-500",
    textAlign: "center"
  },
  loremIpsum: {
    top: 406,
    left: 202,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default CupertinoButtonGrey3;
