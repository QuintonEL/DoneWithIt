import React from "react";
import { Text } from "react-native";

import styles from "./Styles";

function AppText(props) {
  return <Text style={styles.text}>{props.chilren}</Text>;
}

export default AppText;
