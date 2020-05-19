import React from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        onPress={() =>
          alert('Hi')
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
