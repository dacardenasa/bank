import { render } from "@testing-library/react-native";
import { RowInformation } from "./index";

describe("<RowInformation />", () => {
  test("should render the RowInformation type text", () => {
    const { getByTestId } = render(
      <RowInformation type="text" label="Nombre" value="Tarjeta Tuya" />
    );
    const component = getByTestId("rowInfoText");
    expect(component).toBeTruthy();
  });

  test("should render the RowInformation type image", () => {
    const { getByTestId } = render(
      <RowInformation
        type="image"
        label="Logo"
        value="https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg"
      />
    );
    const component = getByTestId("rowInfoImage");
    expect(component).toBeTruthy();
  });
});
