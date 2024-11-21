import {
  FaUserLarge,
  FaBookOpen,
  FaGear,
  FaArrowRightToBracket,
} from 'react-icons/fa6';
import { useLogout } from '../../hooks/auth/useLogout';
import { IconType } from 'react-icons';
import TabButton from './TabButton';

type TabType = 'profile' | 'bookings' | 'settings';

interface Props {
  activeTab: TabType;
  clickHandler: (tab: TabType) => void;
}

interface TabItem {
  id: TabType;
  label: string;
  icon: IconType;
}

const TABS: TabItem[] = [
  { id: 'profile', label: 'Profile', icon: FaUserLarge },
  { id: 'bookings', label: 'Bookings', icon: FaBookOpen },
  { id: 'settings', label: 'Settings', icon: FaGear },
];

const Tabs = ({ activeTab, clickHandler }: Props) => {
  const logout = useLogout();

  return (
    <div className="flex flex-col gap-1 max-w-max border-r border-borderClr bg-defaultBg text-textLight p-2">
      {TABS.map((tab) => (
        <TabButton
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => clickHandler(tab.id)}
          icon={tab.icon}
          label={tab.label}
        />
      ))}

      <TabButton
        onClick={logout}
        icon={FaArrowRightToBracket}
        label="Log out"
      />
    </div>
  );
};

export default Tabs;
