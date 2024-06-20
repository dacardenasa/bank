import { render } from "@testing-library/react-native";
import { ProductCard } from "./index";

describe("<ProductCard />", () => {
  test("should render the ProductCard", () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <ProductCard id="trp-123" name="Tarjeta Exito" handlePress={handlePress} />
    );
    const component = getByTestId("productCard");
    expect(component).toBeTruthy();
  });
});
