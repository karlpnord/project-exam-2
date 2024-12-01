import EditButton from '../../buttons/EditButton';
import { LoginResponseData as User } from '../../../types/loginTypes';
import { useState } from 'react';
import ImageModal from '../ImageModal';

interface Props {
  user: User;
  openSettings: (arg: 'settings') => void;
}

const UserInfo = ({ user, openSettings }: Props) => {
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);

  return (
    <div className='flex gap-2 border border-borderClr p-2 md:p-4 rounded-md'>
      <figure className='w-16 h-16 rounded-full overflow-hidden'>
        <img
          src={user.avatar.url}
          alt={user.avatar.alt}
          className='w-full h-full object-cover cursor-pointer'
          onClick={() => setImageModalOpen(true)}
        />
      </figure>
      <div className='flex-1'>
        <h2 className='font-bold text-textDark'>{user.name}</h2>
        <h3 className='font-medium text-textLight text-sm'>
          {user.venueManager ? 'Venue Manager' : 'Customer'}
        </h3>
        <h4 className='text-textLighter text-xs'>Oslo, Norway</h4>
      </div>
      <EditButton
        className={'self-center'}
        clickHandler={() => openSettings('settings')}
      />
      {imageModalOpen && (
        <ImageModal
          src={user.avatar.url}
          setImageModalOpen={setImageModalOpen}
        />
      )}
    </div>
  );
};

export default UserInfo;
