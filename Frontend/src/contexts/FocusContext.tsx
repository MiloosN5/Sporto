import { createContext } from "react";

export interface FocusContextType {
    messageContactSectionFocus: boolean;
    subscribeContactSectionFocus: boolean;
    setFocus: (section: "message" | "subscribe", isFocused: boolean) => void;
}

export const FocusContext = createContext<FocusContextType | undefined>(undefined);


