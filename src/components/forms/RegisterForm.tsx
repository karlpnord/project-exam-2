import Input from './components/Input';
import Primary from '../buttons/Primary';
import Checkbox from './components/Checkbox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './validations/registerFormSchema';
import { RegisterFormDataProps } from './validations/registerFormSchema';
import ExtraDetails from './components/ExtraDetails';
import { useRegister, RegisterFormData } from '../../hooks/useRegister';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormDataProps>({
    resolver: yupResolver(registerFormSchema),
  });

  const termsAndConditionsChecked = watch('termsAndConditions');
  const venueManagerChecked = watch('venueManager');

  const { mutate, isSuccess, isPending, isError } = useRegister();

  const onSubmit = (data: RegisterFormData) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      venueManager: data.venueManager,
    };
    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label={'Username'}
        id={'name'}
        type={'text'}
        placeholder={'Username'}
        register={register('name')}
        error={errors.name?.message}
      />
      <Input
        label={'Email'}
        id={'email'}
        type={'email'}
        placeholder={'Email'}
        register={register('email')}
        error={errors.email?.message}
      />
      <Input
        label={'Password'}
        id={'password'}
        type={'password'}
        placeholder={'Enter your password'}
        register={register('password')}
        error={errors.password?.message}
      />
      <Checkbox
        label={'I agree to the Terms and Conditions'}
        id={'termsAndConditions'}
        register={register('termsAndConditions')}
        checked={termsAndConditionsChecked || false}
        error={errors.termsAndConditions?.message}
      />
      <Checkbox
        label={'Register as a Venue Manager'}
        id={'venueManager'}
        register={register('venueManager')}
        checked={venueManagerChecked || false}
        error={errors.venueManager?.message}
      />
      {isError && (
        <div className="text-errorContent bg-error text-sm p-3 rounded-md">
          Something went wrong, please try again.
        </div>
      )}
      {isSuccess && (
        <div className="text-successContent bg-success text-sm p-3 rounded-md">
          Registered successfully
        </div>
      )}
      <Primary className={'w-full mt-4'} type={'submit'}>
        {isPending ? 'Registering...' : 'Create Account'}
      </Primary>
      <ExtraDetails>Or register with</ExtraDetails>
    </form>
  );
};

export default RegisterForm;
