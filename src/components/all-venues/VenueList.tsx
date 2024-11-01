import { VenueData } from '../../types/venueTypes';
import VenueCard from '../../components/all-venues/VenueCard';

interface VenueListProps {
  venues: VenueData[];
  lastVenueElementRef: (node: HTMLElement | null) => void;
}

const VenueList = ({ venues, lastVenueElementRef }: VenueListProps) => {
  const noOp = () => {};

  return (
    <div className="flex flex-wrap justify-center xxl:justify-start gap-x-4 gap-y-12">
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
    </div>
  );
};

export default VenueList;
