import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Primary = ({ children, className = '', type = 'button' }: Props) => {
  return (
    <button
      className={twMerge(
        'bg-primary text-primaryContent px-4 py-2 rounded-md text-lg font-medium font-inter hover:bg-primaryDark transition-all',
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
};

export default Primary;
