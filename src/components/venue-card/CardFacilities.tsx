import {
  FaUserLarge,
  FaWifi,
  FaSquareParking,
  FaUtensils,
  FaDog,
} from 'react-icons/fa6';
import { VenueMeta } from '../../types/venueTypes';

interface Props {
  meta: VenueMeta;
  maxGuests: number;
}

const CardFacilities = ({ meta, maxGuests }: Props) => {
  const icons: React.ReactNode[] = [];

  if (meta.wifi) icons.push(<FaWifi key='wifi' />);
  if (meta.parking) icons.push(<FaSquareParking key='parking' />);
  if (meta.breakfast) icons.push(<FaUtensils key='breakfast' />);
  if (meta.pets) icons.push(<FaDog key='pets' />);

  return (
    <div className='px-4 py-3 border-b border-borderClr bg-foreground'>
      <div className='flex justify-between items-center'>
        <div className='flex text-textLight gap-2'>
          {icons.length > 0 ? (
            <>{icons}</>
          ) : (
            <div className='text-xs'>No facilities</div>
          )}
        </div>
        <div className='flex items-center gap-1 text-textDark'>
          <span className='text-textLight text-sm'>{maxGuests}</span>
          <FaUserLarge className='text-textLight' />
        </div>
      </div>
    </div>
  );
};

export default CardFacilities;
