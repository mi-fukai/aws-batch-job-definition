import React from "react";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import { SearchBox } from "@/components/10_organisms/SearchBox";

let path = "";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn((pathText) => {
        path = pathText
      }),
      asPath: "/",
    };
  },
}));

afterEach(cleanup);

describe("checking props", () => {
  test("defaultSearchText props is textField default value", () => {
    const randomText = Math.random().toString(32).substring(2);
    const { getByRole } = render(
      <SearchBox defaultSearchText={randomText} />,
      {}
    );
    expect(getByRole("textbox").value).toBe(randomText);
  });

  test('default value of defaultSearchText props is "" ', () => {
    const { getByRole } = render(<SearchBox />);
    expect(getByRole("textbox").value).toBe("");
  });
});

describe("router", () => {
  test("router", () => {
    render(<SearchBox />);
    fireEvent.click(screen.getByText("検索"));
    expect(path).toBe('/search/');
  });
});
