export interface ApiResponse {
  data: VenueData[];
  meta: MetaData;
}

export interface SingleVenueResponse {
  data: VenueData;
}

export interface MetaData {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  nextPage: number | null;
  pageCount: number;
  previousPage: number | null;
  totalCount: number;
}

export interface VenueData {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta: VenueMeta;
  location: Location;
  owner: Owner;
  bookings?: Booking[];
}

export interface Media {
  url: string;
  alt: string;
}

export interface VenueMeta {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
}

export interface Location {
  address: string;
  city: string;
  zip: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
}

export interface Owner {
  avatar: Media[];
  banner: Media[];
  bio: string;
  email: string;
  name: string;
}

export interface Booking {
  created: string;
  customer: {
    name: string;
    email: string;
  };
  dateFrom: string;
  dateTo: string;
  guests: number;
  id: string;
  updated: string;
}
