import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Primary = ({ children, className = '' }: Props) => {
  return (
    <button
      className={twMerge(
        'bg-primary text-primaryContent px-4 py-2 rounded-md text-lg font-medium font-inter hover:bg-primaryLight transition-all',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Primary;
