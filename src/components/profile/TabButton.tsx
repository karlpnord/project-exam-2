import { IconType } from 'react-icons';

interface Props {
  active?: boolean;
  onClick: () => void;
  icon: IconType;
  label: string;
  className?: string;
}

const TabButton = ({
  active,
  onClick,
  icon: Icon,
  label,
  className = '',
}: Props) => {
  const baseStyles =
    'w-10 h-10 md:w-full md:h-auto md:px-3 md:py-[6px] rounded-sm transition-colors flex items-center justify-center gap-2 md:justify-start';
  const hoverStyles = 'hover:bg-primaryLight hover:bg-opacity-20';
  const activeStyles = active
    ? 'bg-primaryLight bg-opacity-20 text-primary'
    : '';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${activeStyles} ${className}`}
    >
      <Icon size={18} className={active ? 'text-primary' : ''} />
      <span className="hidden md:inline font-medium">{label}</span>
    </button>
  );
};

export default TabButton;
