import { ReactNode, useState } from "react";
import { FocusContext } from "../contexts/FocusContext";

export const FocusProvider = ({ children }: { children: ReactNode }) => {
  const [messageContactSectionFocus, setMessageContactSectionFocus] = useState(false);
  const [subscribeContactSectionFocus, setSubscribeContactSectionFocus] = useState(false);

  const setFocus = (section: "message" | "subscribe", isFocused: boolean) => {
    if (section === "message") {
      setMessageContactSectionFocus(isFocused);
    } else if (section === "subscribe") {
      setSubscribeContactSectionFocus(isFocused);
    }
  };

  return (
    <FocusContext.Provider value={{        
      messageContactSectionFocus,
        subscribeContactSectionFocus,
        setFocus,}}>
      {children}
    </FocusContext.Provider>
  );
};