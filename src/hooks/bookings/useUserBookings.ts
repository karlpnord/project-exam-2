import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

interface ApiError {
  errors: { message: string }[];
}

export const useUserBookings = (url: string, token: string | undefined) => {
  return useQuery({
    queryKey: ['my-bookings'],
    queryFn: async () => {
      try {
        if (!token) {
          throw new Error('User not authenticated');
        }
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'X-Noroff-API-Key': API_KEY,
          },
        });
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ApiError>;
          const message =
            axiosError.response?.data?.errors?.[0]?.message ||
            'An unknown error occurred';
          throw new Error(message);
        }
        throw new Error('Network or unexpected error occurred');
      }
    },
  });
};
