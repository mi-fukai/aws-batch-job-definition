import React, { useState } from "react";
import { cleanup, render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import AutoCompleteTextField from "@/components/20_molecules/AutoCompleteTextField";


afterEach(cleanup);

describe("default items", () => {
  test("searchText props is textField default value", () => {
    const randomText = Math.random().toString(32).substring(2);
    const renderUseStateHook = renderHook(
      (props) => {
        const [searchText, setSearchText] = useState(props);
        return [searchText, setSearchText];
      },
      { initialProps: randomText }
    );
    const [searchText, setSearchText] = renderUseStateHook.result.current;
    const { getByRole } = render(
      <AutoCompleteTextField
        searchText={searchText}
        setSearchText={setSearchText}
      />,
      {}
    );
    expect(getByRole("textbox").value).toBe(randomText);
  });
});

describe("Snap Shot test", () => {
  it("Component Global Snap Shot", () => {
    // TextFieldのidランダム生成をされるとスナップショットが失敗するのでそれを回避する
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const { asFragment } = render(<AutoCompleteTextField />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
