import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, Separator, TextField } from "@/components";
import { FinanciaProductFormProps } from "@/interfaces";

import { useFinancialForm } from "./useFinancialForm";

export const FinancialProductForm = ({ route }: FinanciaProductFormProps) => {
  const { isEditMode, payload } = route.params;
  const {
    errors,
    formData,
    isSubmitButtonDisabled,
    isPendingCreation,
    isPendingCheckingProductId,
    isPendingUpdate,
    handleResetForm,
    handleSubmit,
    handleChangeField,
    validateField,
    validateDateField
  } = useFinancialForm({ payload, isEditMode });

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>
        {isEditMode ? "Formulario de Actualización" : "Formulario de Registro"}
      </Text>
      <Separator height={16} />
      <ScrollView>
        <View>
          <Text style={{ fontWeight: "bold" }}>ID</Text>
          <Separator height={8} />
          <TextField
            placeholder="ID del producto"
            value={formData.id}
            placeholderTextColor="#808081"
            onChangeText={(value) => handleChangeField("id", value)}
            onEndEditing={(e) => {
              validateField({
                field: "id",
                value: e.nativeEvent.text,
                min: 4,
                max: 10
              });
            }}
            hasError={!!errors.id}
            editable={!isEditMode}
          />
          {errors.id && <Text style={styles.textError}>{errors.id}</Text>}
        </View>
        <Separator height={16} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Nombre</Text>
          <Separator height={8} />
          <TextField
            placeholder="Nombre del producto"
            value={formData.name}
            placeholderTextColor="#808081"
            onChangeText={(value) => handleChangeField("name", value)}
            onEndEditing={(e) =>
              validateField({
                field: "name",
                value: e.nativeEvent.text,
                min: 5,
                max: 100
              })
            }
            hasError={!!errors.name}
          />
          {errors.name && <Text style={styles.textError}>{errors.name}</Text>}
        </View>
        <Separator height={16} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Descripción</Text>
          <Separator height={8} />
          <TextField
            placeholder="Descripción del producto"
            value={formData.description}
            placeholderTextColor="#808081"
            onChangeText={(value) => handleChangeField("description", value)}
            onEndEditing={(e) =>
              validateField({
                field: "description",
                value: e.nativeEvent.text,
                min: 10,
                max: 200
              })
            }
            hasError={!!errors.description}
          />
          {errors.description && (
            <Text style={styles.textError}>{errors.description}</Text>
          )}
        </View>
        <Separator height={16} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Logo</Text>
          <Separator height={8} />
          <TextField
            placeholder="Logo del producto"
            value={formData.logo}
            placeholderTextColor="#808081"
            onChangeText={(value) => handleChangeField("logo", value)}
            onEndEditing={(e) =>
              validateField({
                field: "logo",
                value: e.nativeEvent.text,
                min: 10,
                max: 200
              })
            }
            hasError={!!errors.logo}
          />
          {errors.logo && <Text style={styles.textError}>{errors.logo}</Text>}
        </View>
        <Separator height={16} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Fecha liberacion</Text>
          <Separator height={8} />
          <TextField
            placeholder="DD/MM/YYYY"
            value={formData.releaseDate}
            placeholderTextColor="#808081"
            onChangeText={(value) => handleChangeField("releaseDate", value)}
            onEndEditing={(e) => {
              validateDateField("releaseDate", e.nativeEvent.text);
            }}
            hasError={!!errors.releaseDate}
          />
          {errors.releaseDate && (
            <Text style={styles.textError}>{errors.releaseDate}</Text>
          )}
        </View>
        <Separator height={16} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Fecha revisión</Text>
          <Separator height={8} />
          <TextField
            placeholder="DD/MM/YYYY"
            value={formData.checkingDate}
            placeholderTextColor="#808081"
            onChangeText={(value) => handleChangeField("checkingDate", value)}
            editable={false}
          />
        </View>
        <Separator height={180} />
      </ScrollView>
      <View style={styles.buttonsBox}>
        <Button
          disabled={isSubmitButtonDisabled}
          type="primary"
          title="Enviar"
          handlePress={handleSubmit}
        />
        <Button
          disabled={
            isPendingCheckingProductId || isPendingCreation || isPendingUpdate
          }
          type="secondary"
          title="Reiniciar"
          handlePress={handleResetForm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 24,
    paddingHorizontal: 16,
    position: "relative"
  },
  formTitle: { fontSize: 28, fontWeight: "bold" },
  textInput: {
    width: "100%"
  },
  buttonsBox: {
    width: "100%",
    rowGap: 16,
    position: "absolute",
    bottom: 24,
    left: 16
  },
  textError: { color: "red", fontSize: 12, marginTop: 8 }
});
