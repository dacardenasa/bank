import { useState } from "react";

export const useForm = <T extends object>(initialData: T) => {
  const [formData, setFormData] = useState(initialData);

  const handleChangeField = (fieldName: keyof T, value: unknown) =>
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  const resetForm = () => setFormData({ ...initialData });

  return {
    ...formData,
    formData,
    handleChangeField,
    resetForm
  };
};
