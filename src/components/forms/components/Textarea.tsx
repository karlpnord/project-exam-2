import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps {
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  hidden?: boolean;
}

const Textarea = ({
  label,
  id,
  placeholder,
  register,
  error,
  hidden = true,
}: TextareaProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={hidden ? 'hidden' : 'text-textDark font-semibold text-sm'}
      >
        {label}
      </label>
      <textarea
        className={`${error ? 'border-error' : 'border-borderClr'} bg-white border border-borderClr pl-4 pr-2 py-3 w-full rounded-md focus:outline-none focus:border-2 focus:border-primary`}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
