import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useLogout = (): (() => void) => {
  const { setUser, setRememberMe } = useAuth();
  const navigate = useNavigate();

  const logout = useCallback((): void => {
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');

    setUser(null);
    setRememberMe(false);

    setTimeout(() => {
      navigate('/sign-in');
    }, 0);
  }, [navigate, setUser, setRememberMe]);

  return logout;
};
