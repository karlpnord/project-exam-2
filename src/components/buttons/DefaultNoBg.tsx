import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DefaultNoBg = ({ children }: Props) => {
  return (
    <button className='bg-whiteBg text-textDark px-4 py-2 rounded-md text-lg font-medium font-inter hover:bg-defaultBg transition-all'>
      {children}
    </button>
  );
};

export default DefaultNoBg;
