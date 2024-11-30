import { UserBookingsData } from '../../types/bookingType';
import {
  FaWifi,
  FaSquareParking,
  FaUtensils,
  FaDog,
  FaAngleRight,
} from 'react-icons/fa6';
import ImageModal from './ImageModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateBookingCost } from '../../utils/utils';

interface Props {
  data: UserBookingsData;
}

const BookingCardDetails = ({ data }: Props) => {
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);

  const facilities: React.ReactNode[] = [];

  if (data.venue.meta.wifi) facilities.push(<FaWifi key='wifi' />);
  if (data.venue.meta.parking) facilities.push(<FaSquareParking key='parking' />);
  if (data.venue.meta.breakfast) facilities.push(<FaUtensils key='breakfast' />);
  if (data.venue.meta.pets) facilities.push(<FaDog key='pets' />);

  return (
    <div className='flex flex-col md:flex-row-reverse shadow-sm rounded-md overflow-hidden'>
      <figure className='w-full h-[200px] md:w-[280px] md:h-auto'>
        <img
          src={data.venue.media[0].url}
          alt={data.venue.media[0].alt}
          className='w-full h-full object-cover cursor-pointer'
          onClick={() => setImageModalOpen(true)}
        />
      </figure>
      <div className='flex flex-col border-x border-b md:border-t md:border-r-0 border-borderClr md:w-full'>
        <div className='p-2'>
          <h2 className='text-textLight font-semibold uppercase'>
            {data.venue.location.city ? data.venue.location.city : 'city'},{' '}
            {data.venue.location.country
              ? data.venue.location.country
              : 'country'}
          </h2>
          <h2 className='text-textDark text-lg font-semibold'>
            Total: €
            {calculateBookingCost(
              data.dateFrom,
              data.dateTo,
              data.venue.price
            ).toFixed(2)}
          </h2>
          <h2 className='text-textLighter'>
            {data.venue.location.address
              ? data.venue.location.address
              : 'Address'}
          </h2>
        </div>
        <div className='flex gap-2 p-2 text-xl text-textLight border-t border-borderClr'>
          {facilities.length > 0 ? (
            <>{facilities}</>
          ) : (
            <div className='text-xs'>No facilities</div>
          )}
        </div>
        <Link
          to={`/venues/${data.venue.id}`}
          className='flex items-center bg-defaultBg p-2 border-t border-borderClr underline text-textDark text-sm hover:text-textLight transition-colors'
        >
          Click to see venue
          <FaAngleRight />
        </Link>
        {imageModalOpen && (
          <ImageModal
            src={data.venue.media[0].url}
            setImageModalOpen={setImageModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default BookingCardDetails;
