import { useState } from 'react';
import Primary from '../buttons/Primary';
import { useCreateBooking } from '../../hooks/useCreateBooking';
import { useAuth } from '../../hooks/useAuth';
import { VenueData } from '../../types/venueTypes';
import BookingCalendar from '../single-venue/BookingCalendar';
import BookingDetails from '../single-venue/BookingDetails';
import SuccessNotification from '../../utils/SuccessNotification';
import { FiAlertCircle } from 'react-icons/fi';
import ErrorModal from '../single-venue/ErrorModal';

interface Props {
  data: VenueData;
}

export interface ModalState {
  isModalOpen: boolean;
  message: string;
}

const BookingForm = ({ data }: Props) => {
  const [guests, setGuests] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const [errorModal, setErrorModal] = useState<ModalState>({
    isModalOpen: false,
    message: '',
  });

  const { user } = useAuth();
  const { mutate } = useCreateBooking(user?.accessToken);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(guests) > data.maxGuests) {
      setError('Number of guests exceeds the maximum number of guests');
      return;
    }

    if (!startDate || !endDate || endDate < startDate) {
      setError('Please select a valid date range');
      return;
    }

    setError(null);

    const bookingData = {
      venueId: data.id,
      dateFrom: startDate ? startDate?.toISOString() : '',
      dateTo: endDate ? endDate?.toISOString() : '',
      guests: parseInt(guests),
    };

    mutate(
      { formData: bookingData },
      {
        onSuccess: () => {
          setNotificationText('Booking successful!');
          setStartDate(null);
          setEndDate(null);
          setGuests('');
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.errors?.[0]?.message || 'An error occurred';
          setErrorModal({ isModalOpen: true, message: errorMessage });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-[320px] md:w-[500px] mx-auto">
      <div className="flex flex-col gap-4 bg-foreground rounded-md p-4 mb-8">
        <BookingCalendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          bookings={data.bookings ?? []}
        />
        <BookingDetails
          startDate={startDate}
          endDate={endDate}
          guests={guests}
          setGuests={setGuests}
          price={data.price}
        />

        {error && (
          <div className="flex items-center gap-2 bg-error text-errorContent p-3 rounded-md">
            <FiAlertCircle size={20} />
            {error}
          </div>
        )}

        <Primary className="w-full" type={'submit'}>
          Book now
        </Primary>

        {errorModal.isModalOpen && (
          <ErrorModal
            setIsModalOpen={setErrorModal}
            error={errorModal.message}
          />
        )}

        {notificationText && (
          <SuccessNotification
            text={notificationText}
            removeNotif={() => setNotificationText(null)}
          />
        )}
      </div>
    </form>
  );
};

export default BookingForm;
