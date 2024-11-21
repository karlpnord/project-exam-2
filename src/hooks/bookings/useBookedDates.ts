import { useEffect, useState } from 'react';

interface Booking {
  dateFrom: string;
  dateTo: string;
}

export const useBookedDates = (bookings: Booking[] | undefined) => {
  const [bookedDates, setBookedDates] = useState<Date[]>([]);

  useEffect(() => {
    if (bookings) {
      const allBookedDates: Date[] = [];

      bookings.forEach(({ dateFrom, dateTo }) => {
        const startDate = new Date(dateFrom);
        const endDate = new Date(dateTo);

        let currentDate = startDate;
        while (currentDate <= endDate) {
          allBookedDates.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      });

      setBookedDates(allBookedDates);
    }
  }, [bookings]);

  return bookedDates;
};
