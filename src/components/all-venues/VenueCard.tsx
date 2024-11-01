import { motion } from 'framer-motion';
import { VenueData } from '../../types/venueTypes';
import CardImage from '../venue-card/CardImage';
import CardInfo from '../venue-card/CardInfo';
import CardFacilities from '../venue-card/CardFacilities';
import CardRealtor from '../venue-card/CardRealtor';

interface VenueCardProps {
	venue: VenueData;
	isLastElement: boolean;
	lastVenueElementRef: (node: HTMLElement | null) => void;
}

const VenueCard = ({ venue, isLastElement, lastVenueElementRef }: VenueCardProps) => {
	return (
		<motion.a
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.25, ease: 'easeInOut', delay: 0.25 }}
			key={venue.id}
			className='max-w-80 cursor-pointer shadow-md hover:shadow-lg hover:scale-95 transition'
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
		</motion.a>
	);
};

export default VenueCard;
