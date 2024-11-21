import { LoginResponseData as User } from '../../types/loginTypes';
import UserInfo from './profile-tab/UserInfo';
import Banner from './profile-tab/Banner';
import PersonalInformation from './profile-tab/PersonalInformation';
import { useUserProfile } from '../../hooks/profile/useUserProfile';
import Loader from '../../utils/Loader';
import EditButton from '../buttons/EditButton';

interface Props {
  user: User;
  openSettings: (arg: 'settings') => void;
  openBookings: (arg: 'bookings') => void;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const ProfileTabContent = ({ user, openSettings, openBookings }: Props) => {
  const { data, isSuccess, isLoading } = useUserProfile(
    `${apiBaseUrl}/profiles/${user.name}`,
    user.accessToken
  );

  return (
    <div className="flex flex-col gap-4 p-4 bg-foreground">
      {isLoading && <Loader />}
      {isSuccess && (
        <>
          <h1 className="font-bold">Profile</h1>
          <UserInfo user={data.data} openSettings={openSettings} />
          <Banner
            src={data.data.avatar.url}
            alt={data.data.avatar.alt}
            openSettings={openSettings}
          />
          <PersonalInformation
            user={data.data}
            openSettings={openSettings}
            openBookings={openBookings}
          />
          <EditButton
            clickHandler={openSettings}
            className="flex w-fit md:hidden"
          />
        </>
      )}
    </div>
  );
};

export default ProfileTabContent;
