import { FaCheck } from 'react-icons/fa6';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CheckboxProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
}

const Checkbox = ({
  label,
  id,
  register,
  checked,
  error,
  disabled = false,
}: CheckboxProps) => {
  return (
    <div className="flex flex-col text-textLight">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          {...register}
          disabled={disabled}
          className="absolute opacity-0 cursor-pointer"
        />
        <div
          role="checkbox"
          aria-checked={checked}
          className={`w-5 h-5 border rounded transition-colors duration-150 ease-in-out flex items-center justify-center ${
            checked ? 'bg-foreground border-borderClr' : 'border-borderClr'
          } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        >
          {checked && <FaCheck className="text-textDark" />}
        </div>
        <label
          htmlFor={id}
          className={`ml-2 text-textLight text-[10px] ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-error text-xs mt-2">{error}</p>}
    </div>
  );
};

export default Checkbox;
