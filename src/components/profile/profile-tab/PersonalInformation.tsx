import EditButton from '../../buttons/EditButton';
import { UserResponseData as User } from '../../../types/userTypes';
import { Link } from 'react-router-dom';

interface Props {
  user: User;
  openSettings: (arg: 'settings') => void;
  openBookings: (arg: 'bookings') => void;
}

const PersonalInformation = ({ user, openSettings, openBookings }: Props) => {
  return (
    <div className='border border-borderClr p-2 md:p-4 rounded-md'>
      <div className='flex justify-between'>
        <h2 className='font-semibold text-textDark self-center'>
          Personal Information
        </h2>
        <EditButton
          className={'w-fit'}
          clickHandler={() => openSettings('settings')}
        />
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 mt-6'>
        <div className='md:basis-1/3'>
          <h2 className='font-medium text-textLighter'>Username</h2>
          <h3 className='text-textDark font-semibold'>{user.name}</h3>
        </div>
        <div className='md:basis-1/3'>
          <h2 className='font-medium text-textLighter'>Email</h2>
          <h3 className='text-textDark font-semibold break-all md:break-normal'>
            {user.email}
          </h3>
        </div>
        <div className='md:basis-1/3'>
          <Link
            to='/my-venues'
            className='font-medium text-textLighter hover:underline'
          >
            Venues
          </Link>
          <h3 className='text-textDark font-semibold'>{user._count.venues}</h3>
        </div>
        <div className='md:basis-1/3'>
          <h2
            className='font-medium text-textLighter cursor-pointer hover:underline'
            onClick={() => openBookings('bookings')}
          >
            Bookings
          </h2>
          <h3 className='text-textDark font-semibold'>
            {user._count.bookings}
          </h3>
        </div>
        <div className='md:basis-1/3'>
          <h2 className='font-medium text-textLighter'>Bio</h2>
          <h3 className='text-textDark font-semibold'>
            {user.bio ? user.bio : 'No bio'}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
