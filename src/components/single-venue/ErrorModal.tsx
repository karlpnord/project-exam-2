import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { ModalState } from '../forms/BookingForm';

interface Props {
  setIsModalOpen: (state: ModalState) => void;
  error: string | null;
}

const ErrorModal = ({ setIsModalOpen, error }: Props) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => setIsModalOpen({ isModalOpen: false, message: '' }), 300);
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
              {error}
            </h2>
            <div className='flex justify-left sm:justify-end gap-4 mt-8'>
              <button
                onClick={() => handleClose()}
                className='bg-red-800 text-errorContent transition-colors font-semibold w-full py-2 px-8 hover:bg-white/10 rounded-md'
              >
                I understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;
