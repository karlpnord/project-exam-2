import { FormProps } from '../../types/formTypesAddVenue';
import Input from '../forms/components/Input';
import Textarea from '../forms/components/Textarea';

const RequiredFields = ({ register, errors }: Partial<FormProps>) => (
  <div className='flex flex-col gap-2'>
    <h2 className='text-xl font-medium text-textLight'>Required Information</h2>
    <Input
      label='Name'
      id='name'
      type='text'
      placeholder='Enter venue name'
      register={register!('name')}
      error={errors?.name?.message}
      hidden={false}
    />
    <Textarea
      label='Description'
      id='description'
      placeholder='Enter venue description'
      register={register!('description')}
      error={errors?.description?.message}
      hidden={false}
    />
    <div className='flex gap-2 w-full'>
      <Input
        label='Price per night'
        id='price'
        type='text'
        placeholder='€0'
        register={register!('price')}
        error={errors?.price?.message}
        hidden={false}
      />
      <Input
        label='Max Guests'
        id='maxGuests'
        type='number'
        placeholder='0'
        register={register!('maxGuests')}
        error={errors?.maxGuests?.message}
        hidden={false}
      />
    </div>
  </div>
);

export default RequiredFields;
