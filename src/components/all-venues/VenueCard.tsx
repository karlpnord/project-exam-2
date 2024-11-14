import { VenueData } from '../../types/venueTypes';
import CardImage from '../venue-card/CardImage';
import CardInfo from '../venue-card/CardInfo';
import CardFacilities from '../venue-card/CardFacilities';
import CardRealtor from '../venue-card/CardRealtor';
import { Link } from 'react-router-dom';

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
    <Link
      to={`/venues/${venue.id}`}
      key={venue.id}
      className="max-w-80 cursor-pointer shadow-md hover:shadow-lg hover:scale-95 transition"
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
  );
};

export default VenueCard;
