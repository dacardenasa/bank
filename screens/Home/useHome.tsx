import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import { FinancialProduct, HomeProps } from "@/interfaces";
import { financialProductAPI } from "@/services";
import { useRefetchOnFocus } from "@/hooks";
import { ProductCard } from "@/components";
import {
  financialProductDetailRoute,
  financialProductFormRoute
} from "@/constants";

export const useHome = () => {
  const [products, setProducts] = useState<FinancialProduct[]>([]);
  const [search, setSearch] = useState("");

  const navigation = useNavigation<HomeProps["navigation"]>();

  const { mutate, isPending, data } = useMutation({
    mutationFn: financialProductAPI.getFinancialProducts,
    onSuccess: (data) => setProducts(data),
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Hubo un error obteniendo los registros"
      });
      console.info({ error });
    }
  });

  const handlePressProductCard = useCallback(
    (financialProduct: FinancialProduct) =>
      navigation.navigate(financialProductDetailRoute, {
        payload: financialProduct
      }),
    []
  );

  const handlePressAddProduct = useCallback(
    () => navigation.navigate(financialProductFormRoute, { isEditMode: false }),
    []
  );

  const renderProductCard = useCallback(
    ({ item }: { item: FinancialProduct }) => {
      return (
        <ProductCard
          id={item.id}
          name={item.name}
          handlePress={() => handlePressProductCard(item)}
        />
      );
    },
    []
  );

  const handleSearch = useCallback((value: string) => {
    if (!products.length) return;
    if (!value.length) {
      setProducts(data ?? []);
      return;
    }
    setSearch(value);
    setProducts((prevProducts) =>
      prevProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, []);

  useRefetchOnFocus(mutate, false, true);

  return {
    isPending,
    products,
    search,
    handlePressProductCard,
    handleSearch,
    renderProductCard,
    handlePressAddProduct
  };
};
