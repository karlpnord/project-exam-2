import { createContext } from 'react';
import { LoginResponseData } from '../types/loginTypes';
import { UpdateUserProps } from '../types/userTypes';

interface AuthContextType {
  user: LoginResponseData | null;
  setUser: (user: LoginResponseData | null) => void;
  updateUser: (updateData: UpdateUserProps) => void;
  rememberMe: boolean;
  setRememberMe: (remember: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);