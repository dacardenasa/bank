import { render } from "@testing-library/react-native";
import { Button } from "./index";

describe("<Button />", () => {
  test("should render the primary button", () => {
    const handlePress = jest.fn();
    const { getByText } = render(
      <Button title="Actualizar" type="primary" handlePress={handlePress} />
    );
    const label = getByText("Actualizar");
    expect(label).toBeTruthy();
  });

  test("should render the danger button", () => {
    const handlePress = jest.fn();
    const { getByText } = render(
      <Button title="Eliminar" type="danger" handlePress={handlePress} />
    );
    const label = getByText("Eliminar");
    expect(label).toBeTruthy();
  });

  test("should render the secondary button", () => {
    const handlePress = jest.fn();
    const { getByText } = render(
      <Button title="Cancelar" type="secondary" handlePress={handlePress} />
    );
    const label = getByText("Cancelar");
    expect(label).toBeTruthy();
  });
})

