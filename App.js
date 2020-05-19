import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => alert("Hi")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
