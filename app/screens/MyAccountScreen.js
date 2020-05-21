import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";

function MyAccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;
