import { motion } from 'framer-motion';
import { VenueData } from '../../types/venueTypes';
import MyVenuesCard from './MyVenuesCard';

interface VenueListProps {
  venues: VenueData[];
  viewBookings: { [key: string]: boolean };
  toggleViewBookings: (venueId: string) => void;
  handleUpdate: (venue: VenueData) => void;
  handleDelete: (venueId: string) => void;
}

const MyVenuesList = ({
  venues,
  viewBookings,
  toggleViewBookings,
  handleUpdate,
  handleDelete,
}: VenueListProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    className="flex flex-col gap-8 items-center mt-12"
  >
    {venues.map((venue: VenueData) => (
      <MyVenuesCard
        key={venue.id}
        venue={venue}
        viewBookings={viewBookings[venue.id] || false}
        toggleViewBookings={toggleViewBookings}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    ))}
  </motion.div>
);

export default MyVenuesList;
