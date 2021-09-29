import React, { useEffect } from "react";

export const useDelayedEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  timeout: number = 300
) => {
  return useEffect(() => {
    const timeoutId = setTimeout(effect, timeout);
    return () => clearTimeout(timeoutId);
  }, deps);
};
