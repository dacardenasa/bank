import React from "react";
import { ProductCardSkeleton } from "../ProductCardSkeleton";
import uuid from "react-native-uuid";
import { View } from "react-native";

const _ProductCardSkeletonGroup = ({
  skeletonsNumber
}: {
  skeletonsNumber: number;
}) => {
  const items = new Array(skeletonsNumber).fill("_");

  return (
    <View testID="productCardSkeletonGroup">
      {items.map((_) => (
        <ProductCardSkeleton key={uuid.v4().toString()} />
      ))}
    </View>
  );
};

export const ProductCardSkeletonGroup = React.memo(_ProductCardSkeletonGroup);
