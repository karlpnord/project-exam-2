import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiAlertCircle } from 'react-icons/fi';

import { VenueData } from '../../types/venueTypes';
import { useUpdateVenue } from '../../hooks/venues/useUpdateVenue';
import { useAuth } from '../../hooks/auth/useAuth';
import {
  AddVenueFormProps,
  addVenueFormSchema,
} from './validations/addVenueFormSchema';
import {
  mapCurrentDataToDefaults,
  mapFormDataToVenueUpdate,
} from '../../utils/utils';

import Primary from '../buttons/Primary';
import RequiredFields from '../add-venue/RequiredFields';
import OptionalFields from '../add-venue/OptionalFields';

interface UpdateVenueFormProps {
  currentData: VenueData;
  closeModal: () => void;
  isExiting: (value: boolean) => void;
  setUpdateSuccess: (value: boolean) => void;
}

const UpdateVenueForm = ({
  currentData,
  closeModal,
  isExiting,
  setUpdateSuccess,
}: UpdateVenueFormProps) => {
  const [customFormError, setCustomFormError] = useState<string | null>(null);
  const { user } = useAuth();
  const { mutate } = useUpdateVenue(user?.accessToken);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddVenueFormProps>({
    defaultValues: mapCurrentDataToDefaults(currentData),
    resolver: yupResolver(addVenueFormSchema),
  });

  const formData = watch();
  const updatedData = mapFormDataToVenueUpdate(formData, currentData);

  const onSubmit = () => {
    mutate(
      { venueId: currentData.id, formData: updatedData },
      {
        onSuccess: handleSuccessfulUpdate,
        onError: handleUpdateError,
      }
    );
  };

  const handleSuccessfulUpdate = () => {
    setCustomFormError(null);
    closeModal();
    setUpdateSuccess(true);
  };

  const handleUpdateError = (error: any) => {
    const errorMessage =
      error.response?.data?.errors?.[0].message || 'An error occurred';
    setCustomFormError(errorMessage);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-[600px] pr-4"
    >
      <RequiredFields register={register} errors={errors} />
      <div className="border border-borderClr"></div>
      <OptionalFields
        register={register}
        errors={errors}
        venueData={currentData}
      />
      {customFormError && <ErrorMessage message={customFormError} />}
      <FormActions closeModal={closeModal} isExiting={isExiting} />
    </form>
  );
};

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-error mt-4">
    <FiAlertCircle size={24} />
    {message}. Please try again!
  </p>
);

const FormActions = ({
  closeModal,
  isExiting,
}: {
  closeModal: () => void;
  isExiting: (value: boolean) => void;
}) => (
  <div className="flex gap-4 mt-2">
    <Primary type="submit">Update Venue</Primary>
    <button
      type="button"
      className="bg-whiteBg text-textDark px-4 py-2 rounded-md text-lg font-medium font-inter hover:bg-defaultBg transition-all"
      onClick={() => {
        closeModal();
        isExiting(true);
      }}
    >
      Close
    </button>
  </div>
);

export default UpdateVenueForm;
