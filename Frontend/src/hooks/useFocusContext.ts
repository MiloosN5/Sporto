import { useContext } from "react";
import { FocusContext } from "../contexts/FocusContext";

export const useFocusContext = () => {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error('useFocusContext must be used within a FocusProvider');
  }
  return context;
};
