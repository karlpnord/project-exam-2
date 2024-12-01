import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useUserProfile = (url: string, token: string | undefined) => {
  return useQuery({
    queryKey: ['my-profile'],
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
      } catch (error: any) {
        throw new Error(error.response?.data?.errors?.[0]?.message || 'An unknown error occurred');
      }
    },
  });
};
