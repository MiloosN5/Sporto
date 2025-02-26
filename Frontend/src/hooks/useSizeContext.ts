import { useContext } from "react";
import { SizeContext } from "../contexts/SizeContext";

export const useSizeContext = () => {
  const context = useContext(SizeContext);
  if (!context) {
    throw new Error("useSizeContext must be used within a SizeProvider");
  }
  return context;
};
