import { AnimatePresence, motion } from 'framer-motion';
import CardImage from '../venue-card/CardImage';
import CardInfo from '../venue-card/CardInfo';
import CardFacilities from '../venue-card/CardFacilities';
import CardInteractions from '../venue-card/CardInteractions';
import CardBookings from '../venue-card/CardBookings';
import { VenueData } from '../../types/venueTypes';

interface Props {
  venue: VenueData;
  viewBookings: boolean;
  toggleViewBookings: (venueId: string) => void;
  handleUpdate: (venue: VenueData) => void;
  handleDelete: (venueId: string) => void;
}

const MyVenuesCard = ({
  venue,
  viewBookings,
  toggleViewBookings,
  handleUpdate,
  handleDelete,
}: Props) => {
  return (
    <div className="shadow-md rounded-md overflow-hidden">
      <CardImage
        src={venue.media?.[0]?.url}
        alt={venue.media?.[0]?.alt}
        large={'md:w-[500px] md:h-72'}
      />
      <CardInfo
        city={venue.location.city}
        country={venue.location.country}
        rating={venue.rating}
        price={venue.price}
        name={venue.name}
      />
      <CardFacilities meta={venue.meta} maxGuests={venue.maxGuests} />
      <CardInteractions
        toggleViewBookings={() => toggleViewBookings(venue.id)}
        isViewingBookings={viewBookings}
        handleDelete={() => handleDelete(venue.id)}
        handleUpdate={() => handleUpdate(venue)}
      />
      <AnimatePresence>
        {viewBookings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <CardBookings bookings={venue.bookings} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyVenuesCard;
