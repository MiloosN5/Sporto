import { createContext } from "react";

export interface RefContextType {
    rootHeaderNavListRef: React.RefObject<HTMLUListElement>;
    sportsHeaderNavListRef: React.RefObject<HTMLUListElement>;
}

export const RefContext = createContext<RefContextType | undefined>(undefined);


