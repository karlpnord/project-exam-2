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
