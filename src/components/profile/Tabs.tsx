import {
  FaUserLarge,
  FaBookOpen,
  FaGear,
  FaArrowRightToBracket,
} from 'react-icons/fa6';
import { useLogout } from '../../hooks/useLogout';

interface Props {
  activeTab: 'profile' | 'bookings' | 'settings';
  clickHandler: (tab: 'profile' | 'bookings' | 'settings') => void;
}

const Tabs = ({ activeTab, clickHandler }: Props) => {
  const logout = useLogout();

  return (
    <div className="flex flex-col gap-1 max-w-max border-r border-borderClr bg-defaultBg text-textLight p-2">
      <button
        onClick={() => clickHandler('profile')}
        className={`${activeTab === 'profile' && 'bg-primaryLight bg-opacity-20 text-primary'} hover:bg-primaryLight hover:bg-opacity-20 w-10 h-10 md:w-full md:h-auto md:px-3 md:py-[6px] rounded-sm transition-colors flex items-center justify-center gap-2 md:justify-start`}
      >
        <FaUserLarge
          size={18}
          className={`${activeTab === 'profile' && 'text-primary'}`}
        />
        <span className="hidden md:inline font-medium">Profile</span>
      </button>
      <button
        onClick={() => clickHandler('bookings')}
        className={`${activeTab === 'bookings' && 'bg-primaryLight bg-opacity-20 text-primary'} hover:bg-primaryLight hover:bg-opacity-20 w-10 h-10 md:w-full md:h-auto md:px-3 md:py-[6px] rounded-sm transition-colors p-2 flex items-center justify-center gap-2 md:justify-start`}
      >
        <FaBookOpen
          size={18}
          className={`${activeTab === 'bookings' && 'text-primary'}`}
        />
        <span className="hidden md:inline font-medium">Bookings</span>
      </button>
      <button
        onClick={() => clickHandler('settings')}
        className={`${activeTab === 'settings' && 'bg-primaryLight bg-opacity-20 text-primary'} hover:bg-primaryLight hover:bg-opacity-20 w-10 h-10 md:w-full md:h-auto md:px-3 md:py-[6px] rounded-sm transition-colors flex items-center justify-center gap-2 md:justify-start`}
      >
        <FaGear
          size={18}
          className={`${activeTab === 'settings' && 'text-primary'}`}
        />
        <span className="hidden md:inline font-medium">Settings</span>
      </button>
      <button
        onClick={logout}
        className="hover:bg-primaryLight hover:bg-opacity-20 rounded-sm transition-colors w-10 h-10 md:w-full md:h-auto md:px-3 md:py-[6px] flex items-center justify-center gap-2 md:justify-start"
      >
        <FaArrowRightToBracket size={18} />
        <span className="hidden md:inline font-medium">Log out</span>
      </button>
    </div>
  );
};

export default Tabs;
