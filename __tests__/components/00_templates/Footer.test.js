import React from "react";
import { cleanup, render } from "@testing-library/react";
import Footer from "@/components/00_templates/Footer";

afterEach(cleanup);

describe("Snap Shot test", () => {
  it("Component Global Snap Shot", () => {
    const { asFragment } = render(<Footer />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
