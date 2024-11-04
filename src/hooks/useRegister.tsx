import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const apiRegisterUrl = import.meta.env.VITE_API_REGISTER_URL;

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  venueManager?: boolean;
}

interface RegisterResponse {
  message: string;
}

const registerUser = async (
  formData: RegisterFormData
): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>(apiRegisterUrl, formData);
  return response.data;
};

export const useRegister = (): UseMutationResult<
  RegisterResponse,
  AxiosError,
  RegisterFormData
> => {
  return useMutation<RegisterResponse, AxiosError, RegisterFormData>({
    mutationKey: ['register'],
    mutationFn: registerUser,
  });
};
