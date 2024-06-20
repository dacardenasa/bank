import React from "react";
import { StyleSheet, Text, View } from "react-native";

const _EmptyList = ({ description }: { description: string }) => (
  <View style={styles.container}>
    <Text style={styles.descriptionLabel}>{description}</Text>
  </View>
);

export const EmptyList = React.memo(_EmptyList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  descriptionLabel: {
    fontSize: 16,
    color: "#2C2C30",
    textAlign: "center"
  }
});
