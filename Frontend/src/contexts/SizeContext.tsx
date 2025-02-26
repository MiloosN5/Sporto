import { createContext } from "react";

export interface SizeContextType {
  remSize: number;
}

export const SizeContext = createContext<SizeContextType | undefined>(undefined);
