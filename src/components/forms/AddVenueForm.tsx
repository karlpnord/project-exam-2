import { FC } from 'react';
import { useAddVenueForm } from '../../hooks/useAddVenueForm';
import { FormProps } from '../../types/formTypesAddVenue';
import RequiredFields from '../add-venue/RequiredFields';
import OptionalFields from '../add-venue/OptionalFields';
import Primary from '../buttons/Primary';
import SuccessNotification from '../../utils/SuccessNotification';

const AddVenueForm: FC<FormProps> = ({
  register,
  handleSubmit,
  errors,
  venueData,
}) => {
  const {
    handleSubmit: onSubmit,
    errorMessage,
    isError,
    notificationText,
    clearNotification,
  } = useAddVenueForm(venueData);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-[600px]"
    >
      <RequiredFields register={register} errors={errors} />

      <div className="border border-borderClr" />

      <OptionalFields
        register={register}
        errors={errors}
        venueData={venueData}
      />

      <Primary type="submit">Submit Venue</Primary>

      {isError && (
        <div className="text-errorContent bg-error text-sm p-3 rounded-md">
          {`${errorMessage}! Please go to profile settings to become a venue manager!`}
        </div>
      )}

      {notificationText && (
        <SuccessNotification
          text={notificationText}
          removeNotif={clearNotification}
        />
      )}
    </form>
  );
};

export default AddVenueForm;
