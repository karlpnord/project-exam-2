import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useUserProfile = (url: string, token: string | undefined) => {
  return useQuery({
    queryKey: ['my-profile'],
    queryFn: async () => {
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
    },
  });
};
