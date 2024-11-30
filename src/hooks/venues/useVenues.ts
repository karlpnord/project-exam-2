import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiResponse } from '../../types/venueTypes';

export const useVenues = (url: string) => {
  return useQuery<ApiResponse>({
    queryKey: ['all-venues'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(url);
        return data;    
      } catch (error: any) {
        throw new Error(error.response?.data?.errors?.[0]?.message || 'An unknown error occurred');
      }
    },
  });
};
