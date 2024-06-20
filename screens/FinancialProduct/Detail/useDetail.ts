import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

import { financialProductFormRoute, homeRoute } from "@/constants";
import { FinancialProduct, FinancialProductDetailProps } from "@/interfaces";
import { financialProductAPI } from "@/services";

export const useDetail = (product: FinancialProduct) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation<FinancialProductDetailProps["navigation"]>();

  const toggleModal = useCallback(() => setIsModalOpen((c) => !c), []);

  const goToEditProduct = useCallback(() => {
    navigation.navigate(financialProductFormRoute, {
      isEditMode: true,
      payload: product
    });
  }, []);

  const { mutate: deleteFinancialProduct, isPending } = useMutation({
    mutationFn: () => financialProductAPI.deleteFinancialProduct(product.id),
    onSuccess: (data) => {
      if (data) {
        Toast.show({
          type: "success",
          text1: "Registro eliminado correctmente!"
        });
        navigation.navigate(homeRoute);
      }
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Hubo un problema eliminando el registro!"
      });
      toggleModal();
      console.info({ error });
    }
  });

  return {
    deleteFinancialProduct,
    goToEditProduct,
    toggleModal,
    isModalOpen,
    isPending
  };
};
