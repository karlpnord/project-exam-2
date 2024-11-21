import { AddVenueProps, AddVenueResponse } from '../../types/addVenueTypes';
import axios, { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useAuth } from '../auth/useAuth';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

interface ApiError {
  errors: { message: string }[];
}

export const useAddVenue = (): UseMutationResult<
  AddVenueResponse,
  AxiosError<ApiError>,
  AddVenueProps
> => {
  const { user } = useAuth();
  const accessToken = user?.accessToken;

  const addVenue = async (
    formData: AddVenueProps
  ): Promise<AddVenueResponse> => {
    if (!accessToken) {
      throw new Error('User not authenticated');
    }

    const response = await axios.post<AddVenueResponse>(
      `${apiBaseUrl}/venues`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'X-Noroff-API-Key': API_KEY,
        },
      }
    );
    return response.data;
  };

  return useMutation<AddVenueResponse, AxiosError<ApiError>, AddVenueProps>({
    mutationKey: ['add-venue'],
    mutationFn: addVenue,
  });
};
