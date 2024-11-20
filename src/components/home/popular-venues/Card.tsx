import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { VenueData } from '../../../types/venueTypes';
import CardImage from '../../venue-card/CardImage';
import CardInfo from '../../venue-card/CardInfo';
import CardFacilities from '../../venue-card/CardFacilities';
import CardRealtor from '../../venue-card/CardRealtor';
import { Link } from 'react-router-dom';

interface CardProps {
  data: VenueData;
  className?: string;
  style?: React.CSSProperties;
}

const Card = ({ data, className, style = {} }: CardProps) => {
  return (
    <motion.div
      className={twMerge(
        'flex flex-col max-w-sm rounded-md shadow-md font-inter cursor-pointer',
        className
      )}
      style={style}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 0.97,
      }}
    >
      <Link to={`/venues/${data.id}`}>
        <CardImage src={data.media[0].url} alt={data.media[0].alt} />
        <CardInfo
          city={data.location.city}
          country={data.location.country}
          rating={data.rating}
          price={data.price}
          name={data.name}
        />
        <CardFacilities meta={data.meta} maxGuests={data.maxGuests} />
        <CardRealtor name={data.owner.name} email={data.owner.email} />
      </Link>
    </motion.div>
  );
};

export default Card;
