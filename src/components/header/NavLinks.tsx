import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
  href: string;
  FlyoutContent?: (props: {
    setMenuOpen?: (open: boolean) => void;
  }) => JSX.Element;
}

const NavLinks = ({ children, href, FlyoutContent }: Props) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <NavLink
        to={href}
        className={({ isActive }) => {
          return (
            'relative font-inter' +
            ' ' +
            (isActive
              ? 'text-secondary bg-secondaryLight bg-opacity-10 font-semibold py-2 px-4 rounded-md'
              : 'text-textLight hover:text-textDark')
          );
        }}
      >
        {children}
      </NavLink>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-foreground text-textDark shadow-md rounded-md"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLinks;
