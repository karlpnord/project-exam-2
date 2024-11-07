import { useMemo } from 'react';
import { AddVenueProps } from '../types/addVenueTypes';
import { AddVenueFormProps } from '../components/forms/validations/addVenueFormSchema';

export const useTransformFormData = (data: AddVenueFormProps) => {
  const media = data.url ? [{ url: data.url, alt: data.name }] : [];

  const formData = useMemo((): AddVenueProps => {
    return {
      name: data.name,
      description: data.description,
      media: media,
      price: Number(data.price),
      maxGuests: Number(data.maxGuests),
      meta: {
        wifi: data.wifi || false,
        parking: data.parking || false,
        breakfast: data.breakfast || false,
        pets: data.pets || false,
      },
      location: {
        address: data.address || '',
        city: data.city || '',
        country: data.country || '',
      },
    };
  }, [data]);

  return formData;
};
