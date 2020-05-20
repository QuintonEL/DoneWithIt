import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText(props) {
  return <Text style={styles.text}>{props.chilren}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
