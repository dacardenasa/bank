import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProductHeaderProps = {
  id: string;
};

const _ProductHeader = ({ id }: ProductHeaderProps) => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.authorIdLabel}>{`ID: ${id}`}</Text>
      <Text style={styles.extraInfoLabel}>Información extra</Text>
    </View>
  );
};

export const ProductHeader = React.memo(_ProductHeader);

const styles = StyleSheet.create({
  headerBox: {
    paddingHorizontal: 16
  },
  authorIdLabel: {
    fontSize: 28,
    fontWeight: "bold"
  },
  extraInfoLabel: {
    color: "#78787C",
    fontSize: 18
  }
});
