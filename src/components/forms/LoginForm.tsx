import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Primary from '../buttons/Primary';
import ExtraDetails from './components/ExtraDetails';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  loginFormSchema,
  LoginFormDataProps,
} from './validations/loginFormSchema';
import { useLogin } from '../../hooks/auth/useLogin';
import { LoginFormData } from '../../types/loginTypes';
import { useAuth } from '../../hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormDataProps>({
    resolver: yupResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const rememberMeChecked = watch('rememberMe');

  const { mutate, isSuccess, isError, isPending } = useLogin();
  const { setUser, setRememberMe } = useAuth();

  const onSubmit = (data: LoginFormData) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    mutate(formData, {
      onSuccess: (response) => {
        setUser(response.data);
        setRememberMe(rememberMeChecked || false);
        navigate('/');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
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
      <div className='flex justify-between'>
        <Checkbox
          label={'Remember me'}
          id={'rememberMe'}
          register={register('rememberMe')}
          checked={rememberMeChecked || false}
          error={errors.rememberMe?.message}
        />
        <p className='text-[10px] text-textLight'>Forgot password?</p>
      </div>
      {isError && (
        <div className='text-errorContent bg-error text-sm p-3 rounded-md'>
          Something went wrong, please try again.
        </div>
      )}
      {isSuccess && (
        <div className='text-successContent bg-success text-sm p-3 rounded-md'>
          Logged in successfully
        </div>
      )}
      <Primary className={'w-full mt-4'} type={'submit'}>
        {isPending ? 'Signing in...' : 'Sign in'}
      </Primary>
      <ExtraDetails>Or login with</ExtraDetails>
    </form>
  );
};

export default LoginForm;
