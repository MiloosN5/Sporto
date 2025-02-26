import { createContext } from "react";

export interface AuthContextType {
  user: { email: string } | null;
  token: string | null;
  login: (token: string, email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
