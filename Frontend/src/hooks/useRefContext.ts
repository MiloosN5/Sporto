import { useContext } from "react";
import { RefContext } from "../contexts/RefContext";

export const useRefContext = () => {
  const context = useContext(RefContext);
  if (!context) {
    throw new Error('useRefContext must be used within a RefProvider');
  }
  return context;
};
