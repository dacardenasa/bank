import { render } from "@testing-library/react-native";
import { ProductHeader } from "./index";

describe("<ProductHeader />", () => {
  test("should render the ProductHeader", () => {
    const { getByTestId } = render(
      <ProductHeader id="trp-123" />
    );
    const component = getByTestId("productHeader");
    expect(component).toBeTruthy();
  });
});
