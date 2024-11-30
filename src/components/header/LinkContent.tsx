/* eslint-disable react-refresh/only-export-components */
import {
  FaHouse,
  FaHouseChimneyMedical,
  FaHouseChimneyUser,
} from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

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
    <div className='w-full p-4 shadow-none border-b border-borderClr lg:w-[250px] lg:shadow-md lg:border-0'>
      <div className='grid grid-cols-2 lg:grid-cols-1'>
        <div className='space-y-2'>
          <NavLink
            to='/all-venues'
            onClick={handleClick}
            className={({ isActive }) => {
              return (
                'flex gap-1 rounded-md items-center p-2 font-medium hover:bg-foreground transition-all' +
                ' ' +
                (isActive
                  ? 'text-secondary'
                  : 'text-textLight hover:text-textDark')
              );
            }}
          >
            <FaHouse />
            All Venues
          </NavLink>
          <NavLink
            to='/my-venues'
            onClick={handleClick}
            className={({ isActive }) => {
              return (
                'flex gap-1 rounded-md items-center p-2 font-medium hover:bg-foreground transition-all' +
                ' ' +
                (isActive
                  ? 'text-secondary'
                  : 'text-textLight hover:text-textDark')
              );
            }}
          >
            <FaHouseChimneyUser />
            My Venues
          </NavLink>
          <NavLink
            to='/add-venue'
            onClick={handleClick}
            className={({ isActive }) => {
              return (
                'flex gap-1 rounded-md items-center p-2 hover:bg-foreground transition-all' +
                ' ' +
                (isActive
                  ? 'text-secondary font-bold'
                  : 'text-textLight hover:text-textDark font-medium')
              );
            }}
          >
            <FaHouseChimneyMedical />
            Add Venue
          </NavLink>
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
