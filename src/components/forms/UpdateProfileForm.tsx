import Input from './components/Input';
import Checkbox from './components/Checkbox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  updateProfileFormSchema,
  UpdateProfileFormProps,
} from './validations/updateProfileFormSchema';
import { UserResponseData } from '../../types/userTypes';
import Primary from '../buttons/Primary';
import { useState } from 'react';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';
import { useAuth } from '../../hooks/useAuth';
import { UpdateUserProps } from '../../types/userTypes';
import SuccessNotification from '../my-venues/SuccessNotification';

interface Props {
  currentSettings: UserResponseData;
}

const UpdateProfileForm = ({ currentSettings }: Props) => {
  const [customFormError, setCustomFormError] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);

  const { user } = useAuth();
  const { mutate } = useUpdateProfile(user?.accessToken);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<UpdateProfileFormProps>({
    defaultValues: {
      avatar: currentSettings.avatar.url,
      banner: currentSettings.banner.url,
      bio: currentSettings.bio,
      venueManager: currentSettings.venueManager ?? false,
    },
    resolver: yupResolver(updateProfileFormSchema),
  });

  const formData = watch();

  const onSubmit = () => {
    setCustomFormError(null);

    if (!isDirty) {
      setCustomFormError(
        'At least one field must be updated before saving settings'
      );
      return;
    }

    const updatedData: UpdateUserProps = {
      bio: formData.bio ? formData.bio : currentSettings.bio,
      avatar: {
        url: formData.avatar ? formData.avatar : currentSettings.avatar.url,
        alt: currentSettings.avatar.alt,
      },
      banner: {
        url: formData.banner ? formData.banner : currentSettings.banner.url,
        alt: currentSettings.banner.alt,
      },
      venueManager: formData.venueManager ?? false,
    };

    mutate(
      { username: currentSettings.name, updatedData: updatedData },
      {
        onSuccess: () => {
          setNotificationText('Changes saved');
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.errors?.[0]?.message || 'An error occurred';
          setCustomFormError(errorMessage);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 bg-foreground p-4"
    >
      <h2 className="font-bold">Profile Settings</h2>
      <Input
        label="Avatar URL"
        id="avatar"
        type="url"
        placeholder="Enter avatar url"
        register={register('avatar')}
        error={errors.avatar?.message}
        hidden={false}
      />
      <Input
        label="Banner URL"
        id="banner"
        type="url"
        placeholder="Enter banner url"
        register={register('banner')}
        error={errors.banner?.message}
        hidden={false}
      />
      <Input
        label="Bio"
        id="bio"
        type="text"
        placeholder="Enter bio"
        register={register('bio')}
        error={errors.bio?.message}
        hidden={false}
      />
      <Checkbox
        label={'Venue Manager'}
        id={'venueManager'}
        register={register('venueManager')}
        checked={formData.venueManager || false}
        error={errors.venueManager?.message}
        labelStyle={'text-sm text-textDark font-semibold'}
      />
      {customFormError && <p className="text-error">{customFormError}</p>}
      <Primary type="submit" className="md:max-w-fit">
        Save settings
      </Primary>
      {notificationText && (
        <SuccessNotification
          text={notificationText}
          removeNotif={() => setNotificationText(null)}
        />
      )}
    </form>
  );
};

export default UpdateProfileForm;
