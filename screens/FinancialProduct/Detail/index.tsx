import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import {
  Button,
  CustomModal,
  ProductHeader,
  RowInformation,
  Separator
} from "@/components";
import { FinancialProductDetailProps } from "@/interfaces";

import { useDetail } from "./useDetail";

export const FinancialProductDetail = ({
  route
}: FinancialProductDetailProps) => {
  const { payload } = route.params;
  const { goToEditProduct, deleteFinancialProduct, toggleModal, isModalOpen } =
    useDetail(payload);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ProductHeader id={payload.id} />
        <Separator height={46} />
        <RowInformation label="Nombre" value={payload.name} />
        <RowInformation label="descripción" value={payload.description} />
        <RowInformation type="image" label="Logo" value={payload.logo} />
        <RowInformation
          label="Fecha liberacion"
          value={`${payload.releaseDate}`}
        />
        <RowInformation
          label="Fecha revisión"
          value={`${payload.checkingDate}`}
        />
        <View style={styles.separatorBox} />
      </ScrollView>
      <View style={styles.buttonsBox}>
        <Button type="secondary" title="Editar" handlePress={goToEditProduct} />
        <Button type="danger" title="Eliminar" handlePress={toggleModal} />
      </View>
      <CustomModal isVisible={isModalOpen} setIsVisible={toggleModal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text
              style={styles.modalLabel}
            >{`Estas seguro de eliminar el producto ${payload.name}`}</Text>
          </View>
          <View style={styles.modalButtonsBox}>
            <Button
              type="primary"
              title="Confirmar"
              handlePress={deleteFinancialProduct}
            />
            <Button
              type="secondary"
              title="Cancelar"
              handlePress={toggleModal}
            />
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    paddingHorizontal: 16,
    position: "relative"
  },
  separatorBox: {
    marginBottom: 500
  },
  buttonsBox: {
    width: "100%",
    rowGap: 16,
    position: "absolute",
    bottom: 24,
    left: 16
  },
  modalContent: {
    width: "100%",
    paddingTop: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  modalHeader: {
    width: "100%",
    paddingBottom: 36,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F3",
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  modalLabel: { fontSize: 16, color: "#2C2C30", textAlign: "center" },
  modalButtonsBox: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    rowGap: 16
  }
});
