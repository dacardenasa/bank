import { render } from "@testing-library/react-native";
import { ItemSeparatorComponent } from "./index";

describe("<ItemSeparatorComponent />", () => {
  test("should render the ItemSeparatorComponent", () => {
    const { getByTestId } = render(
      <ItemSeparatorComponent />
    );
    const component = getByTestId("itemSeparator");
    expect(component).toBeTruthy();
  });
});
