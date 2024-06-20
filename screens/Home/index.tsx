import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import {
  Button,
  EmptyList,
  ItemSeparatorComponent,
  Loader,
  Separator,
  TextField,
} from "@/components";

import { useHome } from "./useHome";

export const Home = () => {
  const {
    products,
    search,
    isPending,
    handlePressAddProduct,
    handleSearch,
    renderProductCard
  } = useHome();

  if (isPending) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Separator height={35} />
      <TextField
        placeholder="Search..."
        value={search}
        placeholderTextColor="#808081"
        onChangeText={handleSearch}
      />
      <Separator height={35} />
      <View style={styles.productsBox}>
        <FlatList
          style={{ height: 500 }}
          data={products}
          renderItem={renderProductCard}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={() => (
            <EmptyList description="No hay productos financieros registrados" />
          )}
        />
      </View>
      <View
        style={{ width: "100%", position: "absolute", bottom: 32, left: 16 }}
      >
        <Button
          title="Agregar"
          handlePress={handlePressAddProduct}
          type="primary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    position: "relative"
  },
  productsBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#F7F8FA",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 4
  }
});
