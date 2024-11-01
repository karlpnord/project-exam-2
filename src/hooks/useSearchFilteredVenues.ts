import { VenueData } from '../types/venueTypes';

export const useSearchFilteredVenues = (data: any, searchValue: string): VenueData[] => {
	if (!data) return [];
	return data.pages.flatMap((page: any) =>
		page.data.filter((venue: VenueData) => venue.name.toLowerCase().includes(searchValue.toLowerCase()))
	);
};
