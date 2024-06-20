import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="people-circle-outline" size={32} color="#1A3063" />
      <Text style={styles.title}>BANCO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  title: { color: "#1A3063", marginLeft: 4 }
});
