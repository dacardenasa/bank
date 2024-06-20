import { render } from "@testing-library/react-native";
import { EmptyList } from "./index";

describe("<EmptyList />", () => {
  test("should render the EmptyList", () => {
    const { getByText } = render(
      <EmptyList description="No hay productos financieros registrados!" />
    );
    const label = getByText("No hay productos financieros registrados!");
    expect(label).toBeTruthy();
  });
});
