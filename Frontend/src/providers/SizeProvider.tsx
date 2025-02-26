import { ReactNode, useState, useEffect } from "react";
import { SizeContext } from "../contexts/SizeContext";

export const SizeProvider = ({ children }: { children: ReactNode }) => {
  const [remSize, setRemSize] = useState(() =>
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  );

  useEffect(() => {
    const updateRemSize = () => {
      setRemSize(parseFloat(getComputedStyle(document.documentElement).fontSize));
    };

    const observer = new ResizeObserver(() => updateRemSize());
    observer.observe(document.documentElement);

    return () => observer.disconnect();
  }, []);

  return (
    <SizeContext.Provider value={{ remSize }}>
      {children}
    </SizeContext.Provider>
  );
};
