import { useState } from 'react';
import { useUpdateProfile } from './useUpdateProfile';
import { useUserProfile } from './useUserProfile';
import { useAuth } from '../auth/useAuth';
import { UpdateUserProps } from '../../types/userTypes';
import { UpdateProfileFormProps } from '../../components/forms/validations/updateProfileFormSchema';
import { LoginResponseData as User } from '../../types/loginTypes';

interface UseProfileUpdateReturn {
  profileData: any;
  isLoading: boolean;
  isSuccess: boolean;
  customFormError: string | null;
  notificationText: string | null;
  handleSubmit: (formData: UpdateProfileFormProps) => void;
  clearNotification: () => void;
}

export const useProfileUpdate = (
  user: User,
  apiBaseUrl: string
): UseProfileUpdateReturn => {
  const [customFormError, setCustomFormError] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);

  const { updateUser } = useAuth();
  const { mutate } = useUpdateProfile(user?.accessToken);

  const {
    data: profileData,
    isSuccess,
    isLoading,
  } = useUserProfile(`${apiBaseUrl}/profiles/${user.name}`, user.accessToken);

  const checkIfDataChanged = (
    formData: UpdateProfileFormProps,
    currentData: any
  ): boolean => {
    return (
      formData.avatar !== currentData.avatar.url ||
      formData.banner !== currentData.banner.url ||
      formData.bio !== currentData.bio ||
      formData.venueManager !== currentData.venueManager
    );
  };

  const prepareUpdateData = (
    formData: UpdateProfileFormProps,
    currentData: any
  ): UpdateUserProps => {
    return {
      bio: formData.bio || currentData.bio,
      avatar: {
        url: formData.avatar || currentData.avatar.url,
        alt: currentData.avatar.alt,
      },
      banner: {
        url: formData.banner || currentData.banner.url,
        alt: currentData.banner.alt,
      },
      venueManager: formData.venueManager ?? false,
    };
  };

  const handleSubmit = (formData: UpdateProfileFormProps) => {
    setCustomFormError(null);

    if (!isSuccess) return;

    const isChanged = checkIfDataChanged(formData, profileData.data);

    if (!isChanged) {
      setCustomFormError(
        'At least one field must be updated before saving settings'
      );
      return;
    }

    const updatedData = prepareUpdateData(formData, profileData.data);

    mutate(
      {
        username: profileData.data.name,
        updatedData,
      },
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

  const clearNotification = () => setNotificationText(null);

  return {
    profileData: profileData?.data,
    isLoading,
    isSuccess,
    customFormError,
    notificationText,
    handleSubmit,
    clearNotification,
  };
};
