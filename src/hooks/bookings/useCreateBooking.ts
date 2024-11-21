import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { BookingResponse, BookingData } from '../../types/bookingType';

const API_KEY = import.meta.env.VITE_API_KEY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface ApiError {
  errors: { message: string }[];
}

export const useCreateBooking = (token: string | undefined) => {
  const queryClient = useQueryClient();

  const mutationFn = async ({ formData }: { formData: BookingData }) => {
    if (!token) {
      throw new Error('User not authenticated');
    }

    const response = await axios.post(`${apiBaseUrl}/bookings`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': API_KEY,
      },
    });
    return response.data;
  };

  return useMutation<BookingResponse, ApiError, { formData: BookingData }>({
    mutationKey: ['create-booking'],
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['single-venue'] });
    },
    retry: false,
  });
};
