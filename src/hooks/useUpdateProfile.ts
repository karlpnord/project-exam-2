import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { UpdateUserProps, UserResponseData } from '../types/userTypes';

const API_KEY = import.meta.env.VITE_API_KEY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface ApiError {
  errors: { message: string }[];
}

export const useUpdateProfile = (token: string | undefined) => {
  const queryClient = useQueryClient();

  const mutationFn = async ({
    username,
    updatedData,
  }: {
    username: string;
    updatedData: UpdateUserProps;
  }) => {
    if (!token) {
      throw new Error('User not authenticated');
    }

    const response = await axios.put(
      `${apiBaseUrl}/profiles/${username}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_KEY,
        },
      }
    );
    return response.data;
  };

  return useMutation<
    UserResponseData,
    ApiError,
    { username: string; updatedData: UpdateUserProps }
  >({
    mutationKey: ['update-profile'],
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-profile'] });
    },
    retry: 0,
  });
};
