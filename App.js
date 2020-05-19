import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => console.log('text pressed');

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World! This is going to be a really long text. Now I want to make
        this even longer than this and see what happens
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
