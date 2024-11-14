import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SingleVenueResponse } from '../types/venueTypes';

export const useSingleVenue = (url: string) => {
  return useQuery<SingleVenueResponse>({
    queryKey: ['single-venue'],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};
