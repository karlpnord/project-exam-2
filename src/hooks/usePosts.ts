import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiResponse } from '../types/venueTypes';

export const usePosts = (url: string) => {
  return useQuery<ApiResponse>({
    queryKey: ['all-venues'],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};
