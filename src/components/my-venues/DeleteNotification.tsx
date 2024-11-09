import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NOTIFICATION_TTL = 4000;

interface Props {
  text: string;
  removeNotif: () => void;
}

const DeleteNotification = ({ text, removeNotif }: Props) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [removeNotif]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-lg text-white bg-success fixed z-50 top-24 right-4 md:right-12"
    >
      <FaCheck className="text-3xl absolute -top-4 -left-4 p-2 rounded-full bg-white text-successContent shadow" />
      <span className="text-successContent">{text}</span>
      <button onClick={() => removeNotif()} className="ml-auto mt-0.5">
        <FiX className="text-successContent" />
      </button>
    </motion.div>
  );
};

export default DeleteNotification;
