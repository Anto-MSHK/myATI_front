import { useRef } from "react";

export const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll: any = () => (elRef as any).current.scrollIntoView();

  return [executeScroll, elRef];
};
