import { useMemo } from 'react';
import { AddVenueProps } from '../types/addVenueTypes';
import { AddVenueFormProps } from '../components/forms/validations/addVenueFormSchema';
import { DeepPartial } from 'react-hook-form';

export const useTransformFormData = (data: DeepPartial<AddVenueFormProps>) => {
  const media = data.url ? [{ url: data.url, alt: data.name || '' }] : [];

  const formData = useMemo((): AddVenueProps => {
    return {
      name: data.name ? data.name : '',
      description: data.description ? data.description : '',
      media:
        media.length > 0
          ? media
          : [
              {
                url: '',
                alt: '',
              },
            ],
      price: data.price ? Number(data.price) : 0,
      maxGuests: data.maxGuests ? Number(data.maxGuests) : 0,
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
