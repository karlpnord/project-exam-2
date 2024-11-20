import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className = '' }: Props) => {
  return (
    <div className={twMerge('mx-auto max-w-[1400px] px-4 md:px-8', className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
