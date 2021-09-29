import React, { useState } from "react";
import { cleanup } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useDelayedEffect } from "@/lib/customHooks";

afterEach(cleanup);

describe("Custom Hooks: useDelayedEffect", () => {
  test("Can execute the function given as the first argument", () => {
    // TODO: fix
    // const pulseOne = (n) => n + 1;
    // const one = 1;
    // const hook = renderHook(() => {
    //   const [a, setA] = useState(0);
    //   useDelayedEffect(() => setA(pulseOne(a)), [], 0);
    //   return a;
    // });
    // let current = 0;
    // act(() => {
    //   console.log(hook);
    //   console.log(hook.waitFor(()=>hook.result));
    //   console.log(hook.result);
    //   console.log(hook.result.current);
    //   current = hook.result.current;
    // });
    // expect(1).toBe(current);
  });
});
