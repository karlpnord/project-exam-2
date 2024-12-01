export interface BookingResponse {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
}

export interface BookingData {
  dateFrom: string;
  dateTo: string;
  guests: number;
  venueId: string;
}

export interface UserBookingsData {
  dateFrom: string;
  dateTo: string;
  guests: number;
  id: string;
  venue: {
    created: string;
    description: string;
    id: string;
    location: {
      address: string;
      city: string;
      country: string;
    };
    media: [
      {
        url: string;
        alt: string;
      },
    ];
    price: number;
    name: string;
    maxGuests: number;
    meta: {
      wifi: boolean;
      parking: boolean;
      breakfast: boolean;
      pets: true;
    };
  };
}
