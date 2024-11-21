import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { DeepPartial } from 'react-hook-form';
import { useAddVenue } from './venues/useAddVenue';
import { AddVenueFormProps } from '../components/forms/validations/addVenueFormSchema';
import { useTransformFormData } from './useTransformFormData';

interface ApiError {
  errors: { message: string }[];
}

export const useAddVenueForm = (venueData: DeepPartial<AddVenueFormProps>) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const navigate = useNavigate();
  const { mutate, isError } = useAddVenue();
  const formData = useTransformFormData(venueData);

  const handleSubmit = () => {
    mutate(formData, {
      onError: (error: AxiosError<ApiError>) => {
        setErrorMessage(
          error.response?.data?.errors[0]?.message || 'An error occurred'
        );
      },
      onSuccess: () => {
        setNotificationText('Venue added successfully!');
        setTimeout(() => navigate('/my-venues'), 1000);
      },
    });
  };

  const clearNotification = () => setNotificationText(null);

  return {
    handleSubmit,
    errorMessage,
    isError,
    notificationText,
    clearNotification,
  };
};
