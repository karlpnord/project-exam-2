import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface DeleteVenueResponse {
  message: string;
}

export const useDeleteVenue = (token: string | undefined) => {
  const queryClient = useQueryClient();

  const mutationFn = async (venueId: string) => {
    if (!token) {
      throw new Error('User not authenticated');
    }

    const response = await axios.delete(`${apiBaseUrl}/venues/${venueId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': API_KEY,
      },
    });
    return response.data;
  };

  return useMutation<DeleteVenueResponse, Error, string>({
    mutationKey: ['delete-venue'],
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-venues'] });
    },
  });
};
