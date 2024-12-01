import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import NavCTAs from './NavCTAs';
import { LINKS } from './LinkContent';
import MobileNavLink from './MobileNavLink';
import Logo from './Logo';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full block lg:hidden'>
      <div className='flex justify-between'>
        <Logo />
        <button onClick={() => setOpen(true)} className='block text-3xl'>
          <FiMenu />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className='fixed z-100 left-0 top-0 flex h-screen w-full flex-col bg-whiteBg'
          >
            <div className='flex items-center justify-between p-6'>
              <Logo />
              <button onClick={() => setOpen(false)}>
                <FiX className='text-3xl text-neutral-950' />
              </button>
            </div>
            <div className='h-screen bg-whiteBg p-6'>
              {LINKS.map((link) => (
                <MobileNavLink
                  key={link.text}
                  href={link.href}
                  FoldContent={link.component}
                  setMenuOpen={setOpen}
                >
                  {link.text}
                </MobileNavLink>
              ))}
            </div>
            <div className='flex justify-end bg-whiteBg p-6'>
              <NavCTAs setOpen={setOpen} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
