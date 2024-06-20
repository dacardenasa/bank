import { render } from "@testing-library/react-native";
import { Separator } from "./index";

describe("<Separator />", () => {
  test("should render the Separator", () => {
    const { getByTestId } = render(
      <Separator height={50} />
    );
    const component = getByTestId("separator");
    expect(component).toBeTruthy();
  });
});
