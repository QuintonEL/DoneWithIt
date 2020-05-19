import React from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My Message", [
            { text: "Yes", onPress: () => console.log('yes') },
            { text: "No", onPress: () => console.log('no') },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
