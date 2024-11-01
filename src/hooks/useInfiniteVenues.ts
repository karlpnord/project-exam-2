import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiResponse } from '../types/venueTypes';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useInfiniteVenues = () => {
  return useInfiniteQuery<ApiResponse>({
    queryKey: ['all-venues-infinite'],
    queryFn: async ({ pageParam = 1 }) => {
      await delay(500);
      const { data } = await axios.get(
        `${apiBaseUrl}/venues?_owner=true&page=${pageParam}&limit=10`
      );
      return data;
    },
    getNextPageParam: (lastPage: ApiResponse) => {
      return lastPage.meta.isLastPage ? undefined : lastPage.meta.nextPage;
    },
    initialPageParam: 1,
  });
};
