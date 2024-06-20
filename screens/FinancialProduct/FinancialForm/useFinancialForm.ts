import { useCallback, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

import {
  ErrorsProductForm,
  FinanciaProductFormProps,
  FinancialProduct,
  FinancialProductAPI,
  ValidateFieldParams
} from "@/interfaces";
import {
  addYearsToDate,
  createDateFromString,
  isDateGreaterOrEqualToCurrentDate,
  isValidDate,
  isValueBetweenMinAndMax
} from "@/utils";
import { useForm } from "@/hooks";
import { homeRoute, initialErrorsState } from "@/constants";
import { financialProductAPI } from "@/services";

type useFormProps = { payload?: FinancialProduct; isEditMode: boolean };

export const useFinancialForm = ({ payload, isEditMode }: useFormProps) => {
  const [errors, setErrors] = useState<ErrorsProductForm>(initialErrorsState);
  const navigation = useNavigation<FinanciaProductFormProps["navigation"]>();

  const { formData, handleChangeField, resetForm } = useForm({
    id: payload?.id ?? "",
    name: payload?.name ?? "",
    description: payload?.description ?? "",
    logo: payload?.logo ?? "",
    releaseDate: payload?.releaseDate ?? "",
    checkingDate: payload?.checkingDate ?? ""
  });

  const isSomeFieldUnfilled = useMemo(
    () => Object.entries(formData).some(([_, value]) => !value.length),
    [formData]
  );

  const hasSomeFieldWithErrors = useMemo(
    () => Object.entries(errors).some(([_, value]) => !!value),
    [errors]
  );

  const handleResetForm = useCallback(() => {
    setErrors(initialErrorsState);
    resetForm();
  }, []);

  const validateField = useCallback(
    ({ field, value, min, max }: ValidateFieldParams) => {
      const isFieldOk = isValueBetweenMinAndMax({
        value,
        min,
        max
      });
      if (!isFieldOk) {
        setErrors((previous) => ({
          ...previous,
          [field]: `El campo ${field} debe tener entre ${min} a ${max} caracteres!`
        }));
      } else {
        setErrors((previous) => ({ ...previous, [field]: null }));
      }
    },
    []
  );

  const validateDateField = useCallback(
    (field: keyof ErrorsProductForm, value: string) => {
      const isDateOk = isValidDate(value);
      if (!isDateOk) {
        setErrors((previous) => ({
          ...previous,
          [field]: `La fecha de liberacion no es valida!`
        }));
        handleChangeField("checkingDate", "");
        return;
      }
      if (!isDateGreaterOrEqualToCurrentDate(value)) {
        setErrors((previous) => ({
          ...previous,
          [field]: `La fecha debe ser mayor o igual a la actual!`
        }));
        handleChangeField("checkingDate", "");
        return;
      }
      handleChangeField("checkingDate", addYearsToDate(value, 1));
      setErrors((previous) => ({ ...previous, [field]: null }));
    },
    []
  );

  const { mutate: createFinancialProduct, isPending: isPendingCreation } =
    useMutation({
      mutationFn: (product: FinancialProductAPI) =>
        financialProductAPI.createFinanciaProduct(product),
      onSuccess: (data) => {
        if (data) {
          navigation.navigate(homeRoute);
        }
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Hubo un error creando el producto!"
        });
        console.info({ error });
      }
    });

  const { mutate: checkIfIdExists, isPending: isPendingCheckingProductId } =
    useMutation({
      mutationFn: (id: string) => financialProductAPI.checkIfIdExists(id),
      onSuccess: (isIdAlreadyRegistered) => {
        if (!isIdAlreadyRegistered) {
          const { id, name, description, logo, ...rest } = formData;
          createFinancialProduct({
            id,
            name,
            description,
            logo,
            date_release: createDateFromString(rest.releaseDate),
            date_revision: createDateFromString(rest.checkingDate)
          });
          return;
        }
        Toast.show({
          type: "error",
          text1: "El id ya se encuentra registrado en el sistema!!"
        });
        setErrors((previous) => ({ ...previous, id: "ID no válido!" }));
      },
      onError: (error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: error.message
        });
      }
    });

  const { mutate: updateFinancialProduct, isPending: isPendingUpdate } =
    useMutation({
      mutationFn: (product: FinancialProductAPI) =>
        financialProductAPI.updateFinanciaProduct(product),
      onSuccess: (response) => {
        if (response) {
          Toast.show({
            type: "success",
            text1: "El producto fue actualizado correctamente!"
          });
          navigation.navigate(homeRoute);
        }
      },
      onError: (error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: error.message
        });
      }
    });

  const handleSubmit = () => {
    if (isEditMode) {
      const { id, name, description, logo, ...rest } = formData;
      updateFinancialProduct({
        id,
        name,
        description,
        logo,
        date_release: createDateFromString(rest.releaseDate),
        date_revision: createDateFromString(rest.checkingDate)
      });
      return;
    }
    checkIfIdExists(formData.id);
  };

  const isSubmitButtonDisabled =
    isSomeFieldUnfilled ||
    hasSomeFieldWithErrors ||
    isPendingCreation ||
    isPendingCheckingProductId ||
    isPendingUpdate;

  return {
    handleResetForm,
    handleSubmit,
    handleChangeField,
    validateField,
    validateDateField,
    errors,
    formData,
    isSubmitButtonDisabled,
    isPendingCreation,
    isPendingCheckingProductId,
    isPendingUpdate
  };
};
