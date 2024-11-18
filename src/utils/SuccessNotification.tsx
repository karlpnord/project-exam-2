import { useEffect } from 'react';
import { FiX, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NOTIFICATION_TTL = 4000;

interface Props {
  text: string;
  removeNotif: () => void;
}

const SuccessNotification = ({ text, removeNotif }: Props) => {
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
      className="p-4 w-80 flex items-center rounded-lg gap-2 text-sm font-medium shadow-lg bg-successContent fixed z-100 bottom-4 right-4 md:right-12 font-inter"
    >
      <FiCheckCircle size={24} className="text-success" />
      <h2 className="text-semibold text-success">{text}</h2>
      <button onClick={() => removeNotif()} className="ml-auto mt-0.5">
        <FiX className="text-success" size={24} />
      </button>
    </motion.div>
  );
};

export default SuccessNotification;
