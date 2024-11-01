import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { VenueData } from '../../../types/venueTypes';
import CardImage from '../../venue-card/CardImage';
import CardInfo from '../../venue-card/CardInfo';
import CardFacilities from '../../venue-card/CardFacilities';
import CardRealtor from '../../venue-card/CardRealtor';

interface CardProps {
  data: VenueData;
  className?: string;
  style?: React.CSSProperties;
}

const Card = ({ data, className, style = {} }: CardProps) => {
  return (
    <motion.a
      className={twMerge(
        'flex flex-col max-w-sm rounded-md shadow-md font-inter cursor-pointer',
        className
      )}
      style={style}
      initial={{
        filter: 'blur(2px)',
      }}
      whileInView={{
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 0.25,
      }}
      whileHover={{
        scale: 0.97,
      }}
    >
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
    </motion.a>
  );
};

export default Card;
