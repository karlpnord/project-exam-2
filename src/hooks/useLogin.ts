import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { LoginFormData, LoginResponse } from '../types/loginTypes';

const apiLoginUrl = import.meta.env.VITE_API_LOGIN_URL;

const loginUser = async (formData: LoginFormData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(apiLoginUrl, formData);
  return response.data;
};

export const useLogin = (): UseMutationResult<
  LoginResponse,
  AxiosError,
  LoginFormData
> => {
  return useMutation<LoginResponse, AxiosError, LoginFormData>({
    mutationKey: ['login'],
    mutationFn: loginUser,
  });
};
