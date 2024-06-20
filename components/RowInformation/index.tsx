import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type RowInformationProps = {
  label: string;
  value: string;
  type?: "text" | "image";
};

const _RowInformation = ({
  label,
  value,
  type = "text"
}: RowInformationProps) => {
  if (type === "text") {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.halfContentBox}>
            <Text style={styles.rowLabel}>{label}</Text>
          </View>
          <View style={styles.halfContentBox}>
            <Text style={styles.rowValue}>{value}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ ...styles.row, flexDirection: "column" }}>
        <View style={{ ...styles.halfContentBox, width: "100%" }}>
          <Text style={styles.rowLabel}>{label}</Text>
        </View>
        <View
          style={{
            ...styles.halfContentBox,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: value
            }}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

export const RowInformation = React.memo(_RowInformation);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24
  },
  row: { flexDirection: "row", marginBottom: 16 },
  rowLabel: { color: "#78787C", fontSize: 16 },
  rowValue: { textAlign: "right", color: "#2C2C30", fontSize: 16 },
  halfContentBox: { width: "50%" },
  image: {
    width: 200,
    height: 112
  }
});
