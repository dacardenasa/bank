import React from "react";
import { Home } from "./index";
import { MockedNavigator, render } from "@/utils";

describe("Home", () => {
  it("should render default screen", () => {
    const component = render(<MockedNavigator component={Home} />);
    expect(component).toBeDefined();
  });
});
