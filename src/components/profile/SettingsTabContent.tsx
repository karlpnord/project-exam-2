import UpdateProfileForm from '../forms/UpdateProfileForm';
import Loader from '../../utils/Loader';
import SuccessNotification from '../../utils/SuccessNotification';
import { LoginResponseData as User } from '../../types/loginTypes';
import { useProfileUpdate } from '../../hooks/profile/useProfileUpdate';

interface Props {
  user: User;
}

const SettingsTabContent = ({ user }: Props) => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const {
    profileData,
    isLoading,
    isSuccess,
    customFormError,
    notificationText,
    handleSubmit,
    clearNotification,
  } = useProfileUpdate(user, apiBaseUrl);

  if (isLoading) return <Loader />;

  return (
    <>
      {isSuccess && (
        <UpdateProfileForm
          currentSettings={profileData}
          onSubmit={handleSubmit}
          customFormError={customFormError}
        />
      )}

      {notificationText && (
        <SuccessNotification
          text={notificationText}
          removeNotif={clearNotification}
        />
      )}
    </>
  );
};

export default SettingsTabContent;
