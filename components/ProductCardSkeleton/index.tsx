import React from "react";
import { StyleSheet, View } from "react-native";
import { Separator } from "../Separator";

export const ProductCardSkeleton = () => {
  return (
    <View testID="productCardSkeleton" style={styles.container}>
      <View>
        <View style={{ ...styles.placeholder, width: 100 }} />
        <Separator height={8} />
        <View style={{ ...styles.placeholder, width: 50 }} />
      </View>
      <View style={{ ...styles.placeholder, width: 24, height: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 16
  },
  placeholder: {
    backgroundColor: "#ccc",
    height: 8,
    borderRadius: 4
  }
});
