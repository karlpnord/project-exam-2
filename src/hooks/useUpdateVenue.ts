import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AddVenueProps as UpdateVenueProps } from '../types/addVenueTypes';
import { ApiResponse } from '../types/venueTypes';

const API_KEY = import.meta.env.VITE_API_KEY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const useUpdateVenue = (token: string | undefined) => {
  const queryClient = useQueryClient();

  const mutationFn = async ({
    venueId,
    formData,
  }: {
    venueId: string;
    formData: UpdateVenueProps;
  }) => {
    if (!token) {
      throw new Error('User not authenticated');
    }

    const response = await axios.put(
      `${apiBaseUrl}/venues/${venueId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_KEY,
        },
      }
    );
    return response.data;
  };

  return useMutation<
    ApiResponse,
    Error,
    { venueId: string; formData: UpdateVenueProps }
  >({
    mutationKey: ['update-venue'],
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-venues'] });
    },
  });
};
