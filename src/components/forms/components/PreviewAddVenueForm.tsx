import CardImage from '../../venue-card/CardImage';
import CardInfo from '../../venue-card/CardInfo';
import CardFacilities from '../../venue-card/CardFacilities';
import CardRealtor from '../../venue-card/CardRealtor';
import { useAuth } from '../../../hooks/auth/useAuth';

interface PreviewCardProps {
  venueData: {
    name: string;
    description: string;
    price: number;
    maxGuests: number;
    url?: string;
    address?: string;
    city?: string;
    country?: string;
    wifi?: boolean;
    parking?: boolean;
    breakfast?: boolean;
    pets?: boolean;
  };
}

const PreviewAddVenueForm = ({ venueData }: PreviewCardProps) => {
  const { user } = useAuth();

  const cardImage = venueData.url || '';
  const userName = user ? user.name : 'Unknown User';
  const userEmail = user ? user.email : 'Unknown Email';

  return (
    <div className="max-w-80">
      <h2 className="text-xl font-medium text-textLight mb-4">
        Preview of your venue
      </h2>
      <div className="shadow-md">
        <CardImage src={cardImage} alt="alt" />
        <CardInfo
          city={venueData.city || 'Unknown'}
          country={venueData.country || 'Unknown'}
          rating={0}
          price={venueData.price}
          name={venueData.name}
        />
        <CardFacilities
          meta={{
            wifi: venueData.wifi || false,
            parking: venueData.parking || false,
            breakfast: venueData.breakfast || false,
            pets: venueData.pets || false,
          }}
          maxGuests={venueData.maxGuests}
        />
        <CardRealtor name={userName} email={userEmail} />
      </div>
      <h2 className="text-xl font-medium text-textLight mt-4">
        Venue Description
      </h2>
      <p className="text-textLighter w-fit">
        {venueData.description ? venueData.description : 'No description'}
      </p>
    </div>
  );
};

export default PreviewAddVenueForm;
