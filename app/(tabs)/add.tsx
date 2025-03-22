import React from "react";
import { StyleSheet, View, Text } from "react-native";

// This file exists just to make the tab routing work
// The actual functionality is handled in the tab bar button press
export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>เพิ่มรายการใหม่</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
