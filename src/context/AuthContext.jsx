import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("repair-service-user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = (data) => {
    setUser(data);
    localStorage.setItem("repair-service-user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("repair-service-user");
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
