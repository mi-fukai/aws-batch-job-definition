import React from "react";
import { cleanup, render } from "@testing-library/react";
import TitleContent from "@/components/20_molecules/TitleContent";

afterEach(cleanup);

describe("Snap Shot test", () => {
  it("Component Global Snap Shot", () => {
    const { asFragment } = render(<TitleContent />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
