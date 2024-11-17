import UpdateProfileForm from '../forms/UpdateProfileForm';
import { useUserProfile } from '../../hooks/useUserProfile';
import { LoginResponseData as User } from '../../types/loginTypes';
import Loader from '../../utils/Loader';

interface Props {
  user: User;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const SettingsTabContent = ({ user }: Props) => {
  const { data, isSuccess, isLoading } = useUserProfile(
    `${apiBaseUrl}/profiles/${user.name}`,
    user.accessToken
  );

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && <UpdateProfileForm currentSettings={data.data} />}
    </>
  );
};

export default SettingsTabContent;
