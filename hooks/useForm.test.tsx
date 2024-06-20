import { renderHook } from "@testing-library/react-native";
import { useForm } from "./useForm";

it("returns an object with formData, handleChangeField, and resetForm", () => {
  const initialData = { name: "John", age: 30 };
  const { result } = renderHook(() => useForm(initialData));
  expect(result.current).toHaveProperty("formData");
  expect(result.current).toHaveProperty("handleChangeField");
  expect(result.current).toHaveProperty("resetForm");
});
