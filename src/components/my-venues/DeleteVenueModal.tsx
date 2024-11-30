import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  confirmDelete: () => void;
}

const DeleteVenueModal = ({ setIsModalOpen, confirmDelete }: Props) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
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
          className='fixed inset-0 z-90 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center cursor-pointer font-inter'
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className='bg-gradient-to-br from-error to-red-800 p-8 rounded-md max-w-[440px] cursor-default relative z-100'
          >
            <FiAlertCircle size={32} className='text-errorContent mb-4' />
            <h2 className='text-2xl font-semibold text-errorContent'>
              Are you sure you want to delete this venue?
            </h2>
            <div className='flex justify-left sm:justify-end gap-4 mt-8'>
              <button
                onClick={() => {
                  confirmDelete();
                  handleClose();
                }}
                className='bg-red-800 text-errorContent transition-colors font-semibold w-full py-2 px-8 hover:bg-white/10 rounded-md'
              >
                Delete
              </button>
              <button
                onClick={handleClose}
                className='py-2 px-8 font-semibold text-errorContent hover:bg-white/10 transition-colors rounded-md'
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteVenueModal;
