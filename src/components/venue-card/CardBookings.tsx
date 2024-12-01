import { Booking } from '../../types/venueTypes';
import { FaUserLarge } from 'react-icons/fa6';
import { formatDate } from '../../utils/utils';

interface Props {
  bookings: Booking[] | undefined;
}

const CardBookings = ({ bookings }: Props) => {
  return (
    <div className='bg-foreground border-t border-borderClr font-inter'>
      {bookings?.length === 0 ? (
        <div className='px-4 p-3 text-textLight text-sm'>
          No Bookings for this venue
        </div>
      ) : (
        bookings?.map((booking: Booking) => (
          <div
            key={booking.id}
            className='flex flex-col md:flex-row md:justify-between overflow-hidden px-4 p-3 border-b border-borderClr'
          >
            <div>
              <h2 className='text-textDark font-semibold capitalize text-sm'>
                {booking.customer.name}
              </h2>
              <h2 className='text-textLight text-sm'>
                {booking.customer.email}
              </h2>
            </div>
            <div>
              <h2 className='text-textDark font-semibold text-sm'>
                {formatDate(booking.dateFrom)} -{' '}
                {formatDate(booking.dateTo)}
              </h2>
              <h2 className='flex items-center gap-1 text-textLight text-sm md:justify-self-end'>
                {booking.guests}
                <FaUserLarge size={14} />
              </h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardBookings;
