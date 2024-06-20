import { render } from "@testing-library/react-native";
import RootLayout from "./_layout";

describe("RootLayout", () => {
  it("renders NavigationContainer", async () => {
    const { getByTestId } = render(<RootLayout />);
    expect(getByTestId("NavigationContainer")).toBeTruthy();
  });

  it("renders QueryClientProvider", async () => {
    const { getByTestId } = render(<RootLayout />);
    expect(getByTestId("QueryClientProvider")).toBeTruthy();
  });

  it("renders StackNavigator", async () => {
    const { getByTestId } = render(<RootLayout />);
    expect(getByTestId("StackNavigator")).toBeTruthy();
  });

  it("renders Toast", async () => {
    const { getByTestId } = render(<RootLayout />);
    expect(getByTestId("Toast")).toBeTruthy();
  });
});
