import { ReactNode, useRef } from "react";
import { RefContext } from "../contexts/RefContext";

export const RefProvider = ({ children }: { children: ReactNode }) => {
  const rootHeaderNavListRef = useRef<HTMLUListElement>(null);
  const sportsHeaderNavListRef = useRef<HTMLUListElement>(null);

  return (
    <RefContext.Provider value={{ rootHeaderNavListRef, sportsHeaderNavListRef }}>
      {children}
    </RefContext.Provider>
  );
};