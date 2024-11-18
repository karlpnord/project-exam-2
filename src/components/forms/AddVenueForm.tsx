import Input from './components/Input';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import { FaWifi, FaSquareParking, FaUtensils, FaDog } from 'react-icons/fa6';
import Primary from '../buttons/Primary';
import { AddVenueFormProps } from './validations/addVenueFormSchema';
import { useAddVenue } from '../../hooks/useAddVenue';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useTransformFormData } from '../../hooks/useTransformFormData';
import SuccessNotification from '../../utils/SuccessNotification';

interface Props {
  register: any;
  handleSubmit: any;
  errors: any;
  venueData: AddVenueFormProps;
}

interface ApiError {
  errors: { message: string }[];
}

const AddVenueForm = ({ register, handleSubmit, errors, venueData }: Props) => {
  const { mutate, isError } = useAddVenue();
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const formData = useTransformFormData(venueData);

  const onSubmit = () => {
    mutate(formData, {
      onError: (error: AxiosError<ApiError>) => {
        setErrorMessage(error.response?.data?.errors[0]?.message);
      },
      onSuccess: () => {
        setNotificationText('Venue added successfully!');
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-[600px]"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium text-textLight">
          Required Information
        </h2>
        <Input
          label="Name"
          id="name"
          type="text"
          placeholder="Enter venue name"
          register={register('name')}
          error={errors.name?.message}
          hidden={false}
        />
        <Textarea
          label="Description"
          id="description"
          placeholder="Enter venue description"
          register={register('description')}
          error={errors.description?.message}
          hidden={false}
        />
        <div className="flex gap-2">
          <Input
            label="Price per night"
            id="price"
            type="text"
            placeholder="€0"
            register={register('price')}
            error={errors.price?.message}
            hidden={false}
          />
          <Input
            label="Max Guests"
            id="maxGuests"
            type="number"
            placeholder="0"
            register={register('maxGuests')}
            error={errors.maxGuests?.message}
            hidden={false}
          />
        </div>
      </div>
      <div className="border border-borderClr"></div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium text-textLight">
          Optional Information
        </h2>
        <Input
          label="Image URL"
          id="url"
          type="url"
          placeholder="Enter image URL"
          register={register('url')}
          error={errors.url?.message}
          hidden={false}
        />
        <Input
          label="Address"
          id="address"
          type="text"
          placeholder="Enter venue address"
          register={register('address')}
          error={errors.address?.message}
          hidden={false}
        />
        <div className="flex gap-2">
          <Input
            label="City"
            id="city"
            type="text"
            placeholder="Enter city"
            register={register('city')}
            error={errors.city?.message}
            hidden={false}
          />
          <Input
            label="Country"
            id="country"
            type="text"
            placeholder="Enter country"
            register={register('country')}
            error={errors.country?.message}
            hidden={false}
          />
        </div>
        <div>
          <h3 className="mb-2 text-textDark font-medium">Options</h3>
          <div className="flex gap-8">
            <Checkbox
              label={<FaWifi size={20} />}
              id={'wifi'}
              register={register('wifi')}
              checked={venueData.wifi || false}
              error={errors.wifi?.message}
            />
            <Checkbox
              label={<FaSquareParking size={20} />}
              id={'parking'}
              register={register('parking')}
              checked={venueData.parking || false}
              error={errors.parking?.message}
            />
            <Checkbox
              label={<FaUtensils size={20} />}
              id={'breakfast'}
              register={register('breakfast')}
              checked={venueData.breakfast || false}
              error={errors.breakfast?.message}
            />
            <Checkbox
              label={<FaDog size={20} />}
              id={'pets'}
              register={register('pets')}
              checked={venueData.pets || false}
              error={errors.pets?.message}
            />
          </div>
        </div>
      </div>
      <Primary type={'submit'}>Submit Venue</Primary>
      {isError && (
        <div className="text-errorContent bg-error text-sm p-3 rounded-md">
          {`${errorMessage}! Please go to profile settings to become a venue manager! `}
        </div>
      )}
      {notificationText && (
        <SuccessNotification
          text={notificationText}
          removeNotif={() => setNotificationText(null)}
        />
      )}
    </form>
  );
};

export default AddVenueForm;
