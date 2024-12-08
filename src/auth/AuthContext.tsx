import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipe untuk menyimpan token
interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

// Inisialisasi context dengan nilai default
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook untuk menggunakan context ini
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Provider untuk membungkus aplikasi
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(null);

  const setToken = (token: string) => {
    // console.log(token);
    setTokenState(token);
    localStorage.setItem("token", token); // Menyimpan token di localStorage jika dibutuhkan
  };

  const clearToken = () => {
    setTokenState(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};
