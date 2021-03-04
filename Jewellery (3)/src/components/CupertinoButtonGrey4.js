import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey4(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.next}>Next</Text>
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
  next: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "montserrat-500"
  }
});

export default CupertinoButtonGrey4;
