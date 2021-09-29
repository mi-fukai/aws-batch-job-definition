import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

describe("/ のテスト", () => {
  test("has Elasticてすと", () => {
    const { getByText, getByRole } = render(<Index />);
    expect(getByText("Elasticてすと")).toBeInTheDocument();
    expect(getByRole("heading")).toBeTruthy();
  });
});
