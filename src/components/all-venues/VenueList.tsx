import { VenueData } from '../../types/venueTypes';
import VenueCard from '../../components/all-venues/VenueCard';
import { motion } from 'framer-motion';

interface VenueListProps {
  venues: VenueData[];
  lastVenueElementRef: (node: HTMLElement | null) => void;
}

const VenueList = ({ venues, lastVenueElementRef }: VenueListProps) => {
  const noOp = () => {};

  return (
    <motion.div
      className="flex flex-wrap justify-center xxl:justify-start gap-x-4 gap-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {venues.map((venue: VenueData, index: number) => {
        const isLastElement = index === venues.length - 1;
        return (
          <VenueCard
            key={venue.id}
            venue={venue}
            isLastElement={isLastElement}
            lastVenueElementRef={isLastElement ? lastVenueElementRef : noOp}
          />
        );
      })}
    </motion.div>
  );
};

export default VenueList;
