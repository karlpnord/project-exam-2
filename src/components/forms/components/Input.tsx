import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  hidden?: boolean;
}

const Input = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
  hidden = true,
}: InputProps) => {
  return (
    <div className='flex-1'>
      <label
        htmlFor={id}
        className={hidden ? 'hidden' : 'text-textDark font-semibold text-sm'}
      >
        {label}
      </label>
      <input
        className={`${error ? 'border-error' : 'border-borderClr'} bg-white border border-borderClr pl-4 pr-2 py-3 w-full rounded-md focus:outline-none focus:border-2 focus:border-primary`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className='text-error text-xs mt-1'>{error}</p>}
    </div>
  );
};

export default Input;
