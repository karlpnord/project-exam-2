import { MdDelete } from 'react-icons/md';
import { FaAngleDown, FaArrowsRotate } from 'react-icons/fa6';
import { motion } from 'framer-motion';

interface Props {
  toggleViewBookings: () => void;
  isViewingBookings: boolean;
  handleDelete: () => void;
}

const CardInteractions = ({
  toggleViewBookings,
  isViewingBookings,
  handleDelete,
}: Props) => {
  return (
    <motion.div
      className="flex justify-between items-center px-4 py-3 bg-defaultBg"
      animate={isViewingBookings ? 'open' : 'closed'}
    >
      <button onClick={toggleViewBookings} className="flex items-center gap-2">
        <span className="font-inter text-sm text-textDark font-semibold">
          {isViewingBookings ? 'Hide' : 'View'} Bookings
        </span>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
            },
            closed: {
              rotate: '0deg',
            },
          }}
        >
          <FaAngleDown size={16} />
        </motion.span>
      </button>
      <div className="flex gap-2">
        <button>
          <FaArrowsRotate size={18} className="text-textLight" />
        </button>
        <button>
          <MdDelete size={22} className="text-error" onClick={handleDelete} />
        </button>
      </div>
    </motion.div>
  );
};

export default CardInteractions;
