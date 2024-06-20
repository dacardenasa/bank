import { render } from "@testing-library/react-native";
import { CustomHeader } from "./index";

describe("<CustomHeader />", () => {
  test("should render the CustomHeader", () => {
    const { getByText } = render(<CustomHeader />);
    const label = getByText("BANCO");
    expect(label).toBeTruthy();
  });
});
