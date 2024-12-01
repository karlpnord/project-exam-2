export interface UserResponseData {
  name: string;
  email: string;
  bio: string;
  avatar: {
    url: string;
    alt: string;
  };
  banner: {
    url: string;
    alt: string;
  };
  venueManager: boolean;
  _count: {
    venues: number;
    bookings: number;
  };
}

export interface UpdateUserProps {
  bio: string | null;
  avatar: {
    url: string | null;
    alt: string | null;
  };
  banner: {
    url: string | null;
    alt: string | null;
  };
  venueManager: boolean;
}
