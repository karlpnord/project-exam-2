import { LoginResponseData as User } from '../../types/loginTypes';
import { useUserBookings } from '../../hooks/bookings/useUserBookings';
import { UserBookingsData } from '../../types/bookingType';
import SingleBookingCard from './SingleBookingCard';
import Loader from '../../utils/Loader';

interface Props {
  user: User;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const BookingsTabContent = ({ user }: Props) => {
  const { data, isLoading, isSuccess, isError, error } = useUserBookings(
    `${apiBaseUrl}/profiles/${user.name}/bookings?_venue=true`,
    user.accessToken
  );

  return (
    <div className='flex flex-col gap-4 bg-foreground p-4'>
      {isLoading && <Loader />}
      {isError && <p className='text-errorContent bg-error text-sm p-3 rounded-md'>
        {error instanceof Error ? error.message: 'An unknown error occurred'}
      </p>}
      {isSuccess && (
        <>
          <h1 className='font-bold'>My Bookings</h1>
          {data.data.map((booking: UserBookingsData) => (
            <SingleBookingCard key={booking.id} data={booking} />
          ))}
          {data.data.length === 0 && (
            <div className='font-medium text-textDark'>
              No current bookings!
            </div>
          )}
        </>
      )}
      <div></div>
    </div>
  );
};

export default BookingsTabContent;
