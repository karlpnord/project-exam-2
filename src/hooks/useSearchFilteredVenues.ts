import { InfiniteData } from '@tanstack/react-query';
import { VenueData } from '../types/venueTypes';

interface ApiResponse {
  data: VenueData[];
}

export const useSearchFilteredVenues = (
  data: InfiniteData<ApiResponse, unknown> | undefined,
  searchValue: string
): VenueData[] => {
  if (!data?.pages) return [];
  
  return data.pages.flatMap((page) =>
    page.data.filter((venue) =>
      venue.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
};
