import * as yup from 'yup';

export interface AddVenueFormProps {
  url?: string;
  name: string;
  description: string;
  price: number;
  maxGuests: number;
  wifi?: boolean;
  parking?: boolean;
  breakfast?: boolean;
  pets?: boolean;
  address?: string;
  city?: string;
  country?: string;
}

export const addVenueFormSchema = yup
  .object()
  .shape({
    url: yup.string().url('Invalid URL').optional(),
    name: yup.string().required('Name is required'),
    description: yup.string().required('Description is required'),
    price: yup
      .number()
      .typeError('Please enter a valid number')
      .positive('Price must be a positive number')
      .required('Price is required'),
    maxGuests: yup
      .number()
      .typeError('Please enter a valid number')
      .positive('Max guests must be a positive number')
      .min(1, 'Max guests must be at least 1')
      .required('Max guests is required'),
    wifi: yup.boolean().optional(),
    parking: yup.boolean().optional(),
    breakfast: yup.boolean().optional(),
    pets: yup.boolean().optional(),
    address: yup.string().optional(),
    city: yup.string().optional(),
    country: yup.string().optional(),
  })
  .required();
