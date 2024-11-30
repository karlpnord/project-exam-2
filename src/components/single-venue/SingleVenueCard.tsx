import { VenueData } from '../../types/venueTypes';
import CardImage from '../venue-card/CardImage';
import CardInfo from '../venue-card/CardInfo';
import CardFacilities from '../venue-card/CardFacilities';
import CardRealtor from '../venue-card/CardRealtor';

interface Props {
  venue: VenueData;
}

const SingleVenueCard = ({ venue }: Props) => {
  return (
    <div
      key={venue.id}
      className='shadow-md rounded-md overflow-hidden max-w-[500px]'
    >
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
      <CardRealtor name={venue.owner.name} email={venue.owner.email} />
    </div>
  );
};

export default SingleVenueCard;
