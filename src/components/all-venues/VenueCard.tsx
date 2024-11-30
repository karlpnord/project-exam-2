import { VenueData } from '../../types/venueTypes';
import CardImage from '../venue-card/CardImage';
import CardInfo from '../venue-card/CardInfo';
import CardFacilities from '../venue-card/CardFacilities';
import CardRealtor from '../venue-card/CardRealtor';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface VenueCardProps {
  venue: VenueData;
  isLastElement: boolean;
  lastVenueElementRef: (node: HTMLElement | null) => void;
}

const VenueCard = ({
  venue,
  isLastElement,
  lastVenueElementRef,
}: VenueCardProps) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 0.97,
      }}
      className='max-w-80 shadow-md cursor-pointer'
    >
      <Link
        to={`/venues/${venue.id}`}
        key={venue.id}
        ref={isLastElement ? lastVenueElementRef : null}
      >
        <CardImage src={venue.media?.[0]?.url} alt={venue.media?.[0]?.alt} />
        <CardInfo
          city={venue.location.city}
          country={venue.location.country}
          rating={venue.rating}
          price={venue.price}
          name={venue.name}
        />
        <CardFacilities meta={venue.meta} maxGuests={venue.maxGuests} />
        <CardRealtor name={venue.owner.name} email={venue.owner.email} />
      </Link>
    </motion.div>
  );
};

export default VenueCard;
