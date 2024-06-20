import React from "react";
import { FinancialProductForm } from "./index";
import { MockedNavigator, render } from "@/utils";

describe("FinancialProductForm", () => {
  it("should render default screen", () => {
    const component = render(<MockedNavigator component={FinancialProductForm} />);
    expect(component).toBeDefined();
  });
});