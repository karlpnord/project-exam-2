import { VenueData } from '../../types/venueTypes';
import UpdateVenueForm from '../forms/UpdateVenueForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Props {
  venueData: VenueData;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateSuccess: (value: boolean) => void;
}

const UpdateVenueModal = ({
  venueData,
  setIsModalOpen,
  setUpdateSuccess,
}: Props) => {
  const [isExiting, setIsExiting] = useState(false);

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
          className='fixed z-90 bg-black bg-opacity-50 inset-0 backdrop-blur-sm flex justify-center items-center cursor-pointer font-inter overflow-hidden'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative z-100 bg-foreground p-8 rounded-md cursor-default h-fit flex justify-center items-center'
          >
            <div className='max-h-[calc(100vh-240px)] overflow-y-auto rounded-md'>
              <UpdateVenueForm
                currentData={venueData}
                closeModal={closeModal}
                isExiting={setIsExiting}
                setUpdateSuccess={setUpdateSuccess}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpdateVenueModal;
