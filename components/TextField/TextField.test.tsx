import { render } from "@testing-library/react-native";
import { TextField } from "./index";

describe("<TextField />", () => {
  test("should render the TextField", () => {
    const { getByTestId } = render(
      <TextField hasError={false} />
    );
    const component = getByTestId("textfield");
    expect(component).toBeTruthy();
  });
});
