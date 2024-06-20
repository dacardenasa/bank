import { render } from "@testing-library/react-native";
import { ProductCardSkeletonGroup } from "./index";

describe("<ProductCardSkeletonGroup />", () => {
  test("should render the productCardSkeletonGroup", () => {
    const { getByTestId } = render(
      <ProductCardSkeletonGroup skeletonsNumber={5} />
    );
    const component = getByTestId("productCardSkeletonGroup");
    expect(component).toBeTruthy();
  });
});
