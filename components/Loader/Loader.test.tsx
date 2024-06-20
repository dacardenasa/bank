import { render } from "@testing-library/react-native";
import { Loader } from "./index";

describe("<Loader />", () => {
  test("should render the Loader", () => {
    const { getByTestId } = render(
      <Loader />
    );
    const component = getByTestId("loader");
    expect(component).toBeTruthy();
  });
});
