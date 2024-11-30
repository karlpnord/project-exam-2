import { VenueData } from '../types/venueTypes';
import { AddVenueFormProps } from '../components/forms/validations/addVenueFormSchema';

export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function calculateBookingCost(
  dateFrom: string,
  dateTo: string,
  price: number
): number {
  const fromDate = new Date(dateFrom);
  const toDate = new Date(dateTo);

  const timeDifference = toDate.getTime() - fromDate.getTime();

  const numberOfNights = timeDifference / (1000 * 3600 * 24) - 1;

  const totalCost = numberOfNights * price;

  return totalCost;
}

export function calculateNumberofNights(dateFrom: Date, dateTo: Date): number {
  const timeDifference = dateTo.getTime() - dateFrom.getTime();

  const numberOfNights = timeDifference / (1000 * 3600 * 24) - 1;

  return numberOfNights;
}

type ActiveTab = 'profile' | 'bookings' | 'settings';

export const validateTab = (tab: string | undefined): ActiveTab => {
  if (tab === 'profile' || tab === 'bookings' || tab === 'settings') {
    return tab;
  }
  return 'profile';
};

export const mapVenueData = (currentData: VenueData): AddVenueFormProps => {
  return {
    name: currentData.name,
    description: currentData.description,
    price: currentData.price,
    maxGuests: currentData.maxGuests,
    url: currentData.media[0]?.url || '',
    address: currentData.location?.address || '',
    city: currentData.location?.city || '',
    country: currentData.location?.country || '',
    wifi: currentData.meta?.wifi || false,
    parking: currentData.meta?.parking || false,
    breakfast: currentData.meta?.breakfast || false,
    pets: currentData.meta?.pets || false,
  };
};

export const mapCurrentDataToDefaults = (currentData: VenueData) => ({
  name: currentData.name,
  description: currentData.description,
  price: currentData.price,
  maxGuests: currentData.maxGuests,
  url: currentData.media[0]?.url,
  address: currentData.location?.address,
  city: currentData.location?.city,
  country: currentData.location?.country,
  wifi: currentData.meta?.wifi,
  parking: currentData.meta?.parking,
  breakfast: currentData.meta?.breakfast,
  pets: currentData.meta?.pets,
});

export const mapFormDataToVenueUpdate = (
  formData: AddVenueFormProps,
  currentData: VenueData
) => ({
  name: formData.name || currentData.name,
  description: formData.description || currentData.description,
  price: Number(formData.price) || currentData.price,
  maxGuests: Number(formData.maxGuests) || currentData.maxGuests,
  media: formData.url
    ? [{ url: formData.url, alt: formData.name || currentData.name }]
    : currentData.media,
  meta: {
    wifi: formData.wifi ?? currentData.meta?.wifi,
    parking: formData.parking ?? currentData.meta?.parking,
    breakfast: formData.breakfast ?? currentData.meta?.breakfast,
    pets: formData.pets ?? currentData.meta?.pets,
  },
  location: {
    address: formData.address || currentData.location?.address,
    city: formData.city || currentData.location?.city,
    country: formData.country || currentData.location?.country,
  },
});