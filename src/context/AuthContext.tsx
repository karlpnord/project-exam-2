import { createContext, useState, useEffect, ReactNode } from 'react';
import { LoginResponseData } from '../types/loginTypes';

interface AuthContextType {
  user: LoginResponseData | null;
  setUser: (user: LoginResponseData | null) => void;
  rememberMe: boolean;
  setRememberMe: (remember: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<LoginResponseData | null>(null);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedRememberMe = localStorage.getItem('rememberMe');

    if (storedUser && storedRememberMe === 'true') {
      setUser(JSON.parse(storedUser));
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe && user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('rememberMe');
    }
  }, [user, rememberMe]);

  return (
    <AuthContext.Provider value={{ user, setUser, rememberMe, setRememberMe }}>
      {children}
    </AuthContext.Provider>
  );
};
