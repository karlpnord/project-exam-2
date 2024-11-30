import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginResponseData } from '../types/loginTypes';
import { UpdateUserProps } from '../types/userTypes';

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

  const updateUser = (updateData: UpdateUserProps) => {
    setUser((prevUser) => {
      if (!prevUser) return prevUser;
      return {
        ...prevUser,
        bio: updateData.bio ?? prevUser.bio,
        venueManager: updateData.venueManager,
        avatar: {
          url: updateData.avatar.url ?? prevUser.avatar.url,
          alt: updateData.avatar.alt ?? prevUser.avatar.alt,
        },
        banner: {
          url: updateData.banner.url ?? prevUser.banner.url,
          alt: updateData.banner.alt ?? prevUser.banner.alt,
        },
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, updateUser, rememberMe, setRememberMe }}
    >
      {children}
    </AuthContext.Provider>
  );
};