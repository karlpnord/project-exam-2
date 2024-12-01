import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  src: string;
  setImageModalOpen: (isOpen: boolean) => void;
}

const ImageModal = ({ src, setImageModalOpen }: Props) => {
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => setImageModalOpen(false), 300);
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
          className='fixed inset-0 z-90 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center cursor-pointer font-inter'
        >
          <motion.figure
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className='bg-foreground rounded-md overflow-hidden cursor-default relative z-100 max-w-[600px]'
          >
            <img
              onClick={closeModal}
              className='w-full h-full object-cover cursor-pointer'
              src={src}
            />
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
