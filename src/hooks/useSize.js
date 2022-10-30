import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useState } from "react";
export function useSize(target) {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    target && setSize(target.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}
