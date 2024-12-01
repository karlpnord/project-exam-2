export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: LoginResponseData;
  meta: Record<string, never>;
}

export interface LoginResponseData {
  name: string;
  email: string;
  bio: string;
  avatar: Avatar;
  banner: Banner;
  accessToken: string;
  venueManager: boolean;
}

interface Avatar {
  url: string;
  alt: string;
}

interface Banner {
  url: string;
  alt: string;
}
