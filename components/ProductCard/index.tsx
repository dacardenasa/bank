import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type ProductCardProps = {
  id: string;
  name: string;
  handlePress: () => void;
};

const _ProductCard = ({ id, name, handlePress }: ProductCardProps) => {
  return (
    <TouchableOpacity testID="productCard" onPress={handlePress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productId}>{`ID: ${id}`}</Text>
        </View>
        <AntDesign name="right" size={16} color="#C9C9CA" />
      </View>
    </TouchableOpacity>
  );
};

export const ProductCard = React.memo(_ProductCard);

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
  productName: { color: "#2C2C30", fontSize: 16 },
  productId: { color: "#78787C", fontSize: 14 },
});
