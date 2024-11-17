import { MdEdit } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

interface EditButtonProps {
  className?: string;
  clickHandler: (arg: 'settings') => void;
}

const EditButton = ({ className, clickHandler }: EditButtonProps) => {
  return (
    <button
      onClick={() => clickHandler('settings')}
      className={twMerge(
        'hidden sm:flex items-center gap-2 rounded-md text-primary border border-borderClr py-2 px-3 h-fit hover:bg-defaultBg transition-colors',
        className
      )}
    >
      <span>Edit</span>
      <MdEdit />
    </button>
  );
};

export default EditButton;
