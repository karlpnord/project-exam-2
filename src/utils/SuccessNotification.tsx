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
      className="px-4 py-3 w-fit flex items-center rounded-md gap-2 text-sm font-medium bg-opacity-50 shadow-lg bg-success fixed z-100 top-24 right-4 font-inter"
    >
      <FiCheckCircle size={20} className="text-successContent" />
      <h2 className="text-semibold text-successContent">{text}</h2>
      <button onClick={() => removeNotif()} className="ml-auto mt-0.5">
        <FiX className="text-successContent" size={20} />
      </button>
    </motion.div>
  );
};

export default SuccessNotification;
