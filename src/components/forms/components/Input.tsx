import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const Input = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="hidden">
        {label}
      </label>
      <input
        className="border border-borderClr pl-4 pr-2 py-3 w-full rounded-md focus:outline-none focus:ring focus:ring-primary"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
