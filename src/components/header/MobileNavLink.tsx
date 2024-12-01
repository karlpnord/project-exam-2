import { ReactNode, useState } from 'react';
import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
  href: string;
  FoldContent?: (props: {
    setMenuOpen: (open: boolean) => void;
  }) => JSX.Element;
  setMenuOpen: (open: boolean) => void;
}

const MobileNavLink = ({ children, href, FoldContent, setMenuOpen }: Props) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      {FoldContent ? (
        <div
          className='flex w-full cursor-pointer items-center text-textLight justify-between border-b border-neutral-300 py-6 text-start text-xl hover:text-textDark'
          onClick={() => setOpen((prevValue) => !prevValue)}
        >
          <NavLink
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            to={href}
            className={({ isActive }) => {
              return isActive
                ? 'text-secondary font-bold'
                : 'text-textLight hover:text-textDark font-semibold';
            }}
          >
            {children}
          </NavLink>
          <motion.div
            animate={{ rotate: open ? '180deg' : '0deg' }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <NavLink
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          to={href}
          className={({ isActive }) => {
            return (
              'flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-xl' +
              ' ' +
              (isActive
                ? 'text-secondary font-bold'
                : 'text-textLight hover:text-textDark font-semibold')
            );
          }}
        >
          <span>{children}</span>
          <FiArrowRight />
        </NavLink>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : '0px',
            marginBottom: open ? '24px' : '0px',
            marginTop: open ? '12px' : '0px',
          }}
          className='overflow-hidden'
        >
          <div ref={ref}>
            <FoldContent setMenuOpen={setMenuOpen} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavLink;
