import UpdateProfileForm from '../forms/UpdateProfileForm';
import { useUserProfile } from '../../hooks/useUserProfile';
import { LoginResponseData as User } from '../../types/loginTypes';
import Loader from '../../utils/Loader';
import { useState } from 'react';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';
import { UpdateUserProps } from '../../types/userTypes';
import SuccessNotification from '../../utils/SuccessNotification';
import { UpdateProfileFormProps } from '../forms/validations/updateProfileFormSchema';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  user: User;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const SettingsTabContent = ({ user }: Props) => {
  const { data, isSuccess, isLoading } = useUserProfile(
    `${apiBaseUrl}/profiles/${user.name}`,
    user.accessToken
  );

  const { updateUser } = useAuth();

  const [customFormError, setCustomFormError] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const { mutate } = useUpdateProfile(user?.accessToken);

  const onSubmit = (formData: UpdateProfileFormProps) => {
    setCustomFormError(null);

    const isChanged =
      formData.avatar !== data.data.avatar.url ||
      formData.banner !== data.data.banner.url ||
      formData.bio !== data.data.bio ||
      formData.venueManager !== data.data.venueManager;

    if (!isChanged) {
      setCustomFormError(
        'At least one field must be updated before saving settings'
      );
      return;
    }

    const updatedData: UpdateUserProps = {
      bio: formData.bio ? formData.bio : data?.data?.bio,
      avatar: {
        url: formData.avatar ? formData.avatar : data?.data?.avatar.url,
        alt: data?.data?.avatar.alt,
      },
      banner: {
        url: formData.banner ? formData.banner : data?.data?.banner.url,
        alt: data?.data?.banner.alt,
      },
      venueManager: formData.venueManager ?? false,
    };

    mutate(
      { username: data?.data?.name, updatedData: updatedData },
      {
        onSuccess: () => {
          setNotificationText('Profile updated successfully');
          updateUser(updatedData);
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.errors?.[0].message || 'An error occurred';
          setCustomFormError(errorMessage);
        },
      }
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <UpdateProfileForm
          currentSettings={data.data}
          onSubmit={onSubmit}
          customFormError={customFormError}
        />
      )}
      {notificationText && (
        <SuccessNotification
          text={notificationText}
          removeNotif={() => setNotificationText(null)}
        />
      )}
    </>
  );
};

export default SettingsTabContent;
