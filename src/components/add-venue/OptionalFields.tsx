import Input from '../forms/components/Input';
import Checkbox from '../forms/components/Checkbox';
import { FormProps } from '../../types/formTypesAddVenue';
import { FaWifi, FaSquareParking, FaUtensils, FaDog } from 'react-icons/fa6';

const VenueOptions = ({ register, errors, venueData }: Partial<FormProps>) => {
  const options = [
    { id: 'wifi', icon: FaWifi },
    { id: 'parking', icon: FaSquareParking },
    { id: 'breakfast', icon: FaUtensils },
    { id: 'pets', icon: FaDog },
  ] as const;

  return (
    <div>
      <h3 className="mb-2 text-textDark font-medium">Options</h3>
      <div className="flex gap-8">
        {options.map(({ id, icon: Icon }) => (
          <Checkbox
            key={id}
            label={<Icon size={20} />}
            id={id}
            register={register!(id)}
            checked={venueData?.[id] || false}
            error={errors?.[id]?.message}
          />
        ))}
      </div>
    </div>
  );
};

const OptionalFields = ({
  register,
  errors,
  venueData,
}: Partial<FormProps>) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-xl font-medium text-textLight">Optional Information</h2>
    <Input
      label="Image URL"
      id="url"
      type="url"
      placeholder="Enter image URL"
      register={register!('url')}
      error={errors?.url?.message}
      hidden={false}
    />
    <Input
      label="Address"
      id="address"
      type="text"
      placeholder="Enter venue address"
      register={register!('address')}
      error={errors?.address?.message}
      hidden={false}
    />
    <div className="flex gap-2 w-full">
      <Input
        label="City"
        id="city"
        type="text"
        placeholder="Enter city"
        register={register!('city')}
        error={errors?.city?.message}
        hidden={false}
      />
      <Input
        label="Country"
        id="country"
        type="text"
        placeholder="Enter country"
        register={register!('country')}
        error={errors?.country?.message}
        hidden={false}
      />
    </div>
    <VenueOptions register={register} errors={errors} venueData={venueData} />
  </div>
);

export default OptionalFields;
