import { render } from "@testing-library/react-native";
import { ProductCardSkeleton } from "./index";

describe("<productCardSkeleton />", () => {
  test("should render the productCardSkeleton", () => {
    const { getByTestId } = render(
      <ProductCardSkeleton />
    );
    const component = getByTestId("productCardSkeleton");
    expect(component).toBeTruthy();
  });
});
