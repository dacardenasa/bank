export type MinMaxValuesParams = { value: string; min: number; max: number };

export type ErrorsProductForm = {
  id: string | null;
  name: string | null;
  description: string | null;
  logo: string | null;
  releaseDate: string | null;
};

export type ValidateFieldParams = MinMaxValuesParams & {
  field: keyof ErrorsProductForm;
};
