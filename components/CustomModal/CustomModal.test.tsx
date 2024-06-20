import { render } from "@testing-library/react-native";
import { CustomModal } from "./index";
import { Text, View } from "react-native";

describe("<CustomModal />", () => {
  test("should render the CustomModal when is open", () => {
    const setIsVisible = jest.fn();
    const { getByText } = render(
      <CustomModal isVisible setIsVisible={setIsVisible}>
        <View>
          <Text>Soy el contenido del modal</Text>
        </View>
      </CustomModal>
    );
    const label = getByText("Soy el contenido del modal");
    expect(label).toBeTruthy();
  });
});
