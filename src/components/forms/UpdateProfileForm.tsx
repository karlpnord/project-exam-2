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

interface Props {
  currentSettings: UserResponseData;
  onSubmit: (formData: any) => void;
  customFormError: string | null;
}

const UpdateProfileForm = ({
  currentSettings,
  onSubmit,
  customFormError,
}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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

  return (
    <form
      onSubmit={handleSubmit(() => onSubmit(formData))}
      className='flex flex-col gap-3 bg-foreground p-4'
    >
      <h2 className='font-bold'>Profile Settings</h2>
      <Input
        label='Avatar URL'
        id='avatar'
        type='url'
        placeholder='Enter avatar url'
        register={register('avatar')}
        error={errors.avatar?.message}
        hidden={false}
      />
      <Input
        label='Banner URL'
        id='banner'
        type='url'
        placeholder='Enter banner url'
        register={register('banner')}
        error={errors.banner?.message}
        hidden={false}
      />
      <Input
        label='Bio'
        id='bio'
        type='text'
        placeholder='Enter bio'
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
      {customFormError && <p className='text-error'>{customFormError}</p>}
      <Primary type='submit' className='md:max-w-fit'>
        Save settings
      </Primary>
    </form>
  );
};

export default UpdateProfileForm;
