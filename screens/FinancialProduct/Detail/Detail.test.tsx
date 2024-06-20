import React from "react";
import { FinancialProductDetail } from "./index";
import { MockedNavigator, render } from "@/utils";

describe("FinancialProductDetail", () => {
  it("should render default screen", () => {
    const component = render(<MockedNavigator component={FinancialProductDetail} />);
    expect(component).toBeDefined();
  });
});