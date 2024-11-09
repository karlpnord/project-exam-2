import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  clickHandler?: () => void;
}

const DefaultNoBg = ({ children, className = '', clickHandler }: Props) => {
  return (
    <button
      className={twMerge(
        'bg-whiteBg text-textDark px-4 py-2 rounded-md text-lg font-medium font-inter hover:bg-defaultBg transition-all',
        className
      )}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default DefaultNoBg;
