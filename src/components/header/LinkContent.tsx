import {
  FaHouse,
  FaHouseChimneyMedical,
  FaHouseChimneyUser,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface Props {
  setMenuOpen?: (open: boolean) => void;
}

const VenueContent = ({ setMenuOpen }: Props) => {
  const handleClick = () => {
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full p-4 shadow-none border-b border-borderClr lg:w-[250px] lg:shadow-md lg:border-0">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="space-y-2 text-textLight font-medium">
          <Link
            to="/all-venues"
            className="flex gap-1 rounded-md items-center p-2 hover:text-textDark hover:bg-foreground transition-all"
            onClick={handleClick}
          >
            <FaHouse />
            All Venues
          </Link>
          <Link
            to="/my-venues"
            className="flex gap-1 rounded-md items-center p-2 hover:text-textDark hover:bg-foreground transition-all"
            onClick={handleClick}
          >
            <FaHouseChimneyUser />
            My Venues
          </Link>
          <Link
            to="/add-venue"
            className="flex gap-1 rounded-md items-center p-2 hover:text-textDark hover:bg-foreground transition-all"
            onClick={handleClick}
          >
            <FaHouseChimneyMedical />
            Add Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

type LinkItem = {
  text: string;
  href: string;
  component?: (props: { setMenuOpen?: (open: boolean) => void }) => JSX.Element;
};

export const LINKS: LinkItem[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Venues',
    href: '/all-venues',
    component: VenueContent,
  },
  {
    text: 'Profile',
    href: '/profile',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'About',
    href: '/about',
  },
];
