import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

interface Props {
  desc: string;
  setIsModalOpen: (isOpen: boolean) => void;
}

const DescriptionModal = ({ desc, setIsModalOpen }: Props) => {
  const [isExiting, setIsExiting] = useState<boolean>(false);

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
          className="fixed inset-0 z-90 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center cursor-pointer font-inter"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-foreground p-8 rounded-md cursor-default relative z-100 max-w-[600px]"
          >
            <button
              onClick={closeModal}
              className="hover:bg-defaultBg p-1 rounded-md transition-colors mb-4 ml-[-8px]"
            >
              <MdOutlineClose size={24} />
            </button>
            <h2 className="uppercase font-bold text-textDark">
              About this venue
            </h2>
            <p className="text-textLight">{desc}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DescriptionModal;
