import { VenueData } from '../../types/venueTypes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddVenueFormProps,
  addVenueFormSchema,
} from './validations/addVenueFormSchema';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import { FaWifi, FaSquareParking, FaUtensils, FaDog } from 'react-icons/fa6';
import Primary from '../buttons/Primary';
import { useTransformFormData } from '../../hooks/useTransformFormData';
import { useUpdateVenue } from '../../hooks/useUpdateVenue';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface Props {
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
}: Props) => {
  const [customFormError, setCustomFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddVenueFormProps>({
    defaultValues: {
      name: currentData.name,
      description: currentData.description,
      price: currentData.price,
      maxGuests: currentData.maxGuests,
      url: currentData.media[0]?.url,
      address: currentData.location?.address,
      city: currentData.location?.city,
      country: currentData.location?.country,
      wifi: currentData.meta?.wifi,
      parking: currentData.meta?.parking,
      breakfast: currentData.meta?.breakfast,
      pets: currentData.meta?.pets,
    },
    resolver: yupResolver(addVenueFormSchema),
  });

  const { user } = useAuth();
  const { mutate } = useUpdateVenue(user?.accessToken);

  const formData = watch();
  const updatedData = useTransformFormData(formData);

  const onSubmit = () => {
    mutate(
      { venueId: currentData.id, formData: updatedData },
      {
        onSuccess: () => {
          setCustomFormError(null);
          closeModal();
          setUpdateSuccess(true);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-[600px] pr-4"
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
              checked={formData.wifi || false}
              error={errors.wifi?.message}
            />
            <Checkbox
              label={<FaSquareParking size={20} />}
              id={'parking'}
              register={register('parking')}
              checked={formData.parking || false}
              error={errors.parking?.message}
            />
            <Checkbox
              label={<FaUtensils size={20} />}
              id={'breakfast'}
              register={register('breakfast')}
              checked={formData.breakfast || false}
              error={errors.breakfast?.message}
            />
            <Checkbox
              label={<FaDog size={20} />}
              id={'pets'}
              register={register('pets')}
              checked={formData.pets || false}
              error={errors.pets?.message}
            />
          </div>
          {customFormError && (
            <p className="text-error mt-4">
              <FiAlertCircle size={24} />
              {customFormError}. Please try again!
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <Primary type={'submit'}>Update Venue</Primary>
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
    </form>
  );
};

export default UpdateVenueForm;
