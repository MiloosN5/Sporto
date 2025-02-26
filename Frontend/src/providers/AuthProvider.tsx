import { ReactNode, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");

    if (storedToken && storedEmail) {
      setToken(storedToken);
      setUser({ email: storedEmail });
    }
  }, []);

  const login = (token: string, email: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setToken(token);
    setUser({ email });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};