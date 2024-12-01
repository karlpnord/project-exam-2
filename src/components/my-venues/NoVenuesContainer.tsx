import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { IoIosWarning } from 'react-icons/io';
import DefaultNoBg from '../buttons/DefaultNoBg';
import { motion } from 'framer-motion';

const NoVenuesContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    try {
      navigate(-1);
    } catch {
      navigate('/');
    }
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className='flex justify-center items-center mt-6 pb-60 pt-12 md:pb-0 md:pt-0'
    >
      <div className='bg-foreground text-warningContent border border-borderClr py-8 px-6 sm:px-12 rounded-md shadow-md max-w-md'>
        <div className='mb-4 text-yellow-500 grid place-items-center mx-auto'>
          <IoIosWarning size={48} />
        </div>
        <p className='text-center mb-6 text-warningContent font-medium'>
          You dont have any venues yet! Click below to add your own venue or to
          go back!
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-2'>
          <Link to='/add-venue'>
            <DefaultNoBg className='bg-yellow-500 text-warningContent transition-colors font-semibold w-full px-6 hover:bg-yellow-600'>
              Add venue
            </DefaultNoBg>
          </Link>
          <DefaultNoBg
            clickHandler={handleNavigate}
            className='px-6 text-warningContent'
          >
            Go Back
          </DefaultNoBg>
        </div>
      </div>
    </motion.div>
  );
};

export default NoVenuesContainer;
