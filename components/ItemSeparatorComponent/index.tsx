import React from "react";
import { StyleSheet, View } from "react-native";

const _ItemSeparatorComponent = () => <View style={styles.container} />;

export const ItemSeparatorComponent = React.memo(_ItemSeparatorComponent);

const styles = StyleSheet.create({
  container: { width: "100%", borderWidth: 1, borderColor: "#EEF1F6" }
});
