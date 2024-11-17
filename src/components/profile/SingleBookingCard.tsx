import { UserBookingsData } from '../../types/bookingType';
import { formatDate } from '../../utils/utils';
import { FaAngleDown, FaUserLarge } from 'react-icons/fa6';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BookingCardDetails from './BookingCardDetails';

interface Props {
  data: UserBookingsData;
}

const SingleBookingCard = ({ data }: Props) => {
  const [viewDetails, setViewDetails] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleViewBookings = (bookingId: string) => {
    setViewDetails((prevState) => ({
      ...prevState,
      [bookingId]: !prevState[bookingId],
    }));
  };

  return (
    <motion.div
      animate={viewDetails[data.id] ? 'open' : 'closed'}
      className="flex flex-col gap-4 p-4 bg-foreground rounded-md border border-borderClr"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-textDark font-semibold md:text-lg">
          {data.venue.name}
        </h2>
        <h3 className="text-textDark font-semibold md:text-lg">
          {formatDate(data.dateFrom)} - {formatDate(data.dateTo)}
        </h3>
      </div>
      <div className="flex justify-between">
        <h2 className="flex items-center gap-1 text-textLight text-md">
          {data.guests}
          <FaUserLarge size={14} />
        </h2>
        <button
          onClick={() => toggleViewBookings(data.id)}
          className="flex items-center gap-1 text-primary"
        >
          View Details
          <motion.span
            variants={{
              open: { rotate: '180deg' },
              closed: { rotate: '0deg' },
            }}
          >
            <FaAngleDown />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {viewDetails[data.id] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <BookingCardDetails data={data} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SingleBookingCard;
