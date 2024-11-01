import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { FiChevronDown } from 'react-icons/fi';

interface QuestionsProps {
  id: number;
  title: string;
  children: React.ReactNode;
  handler: (id: number) => void;
  openId: number | null;
}

const Question = ({ id, title, children, handler, openId }: QuestionsProps) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={openId === id ? 'open' : 'closed'}
      className="border-b-[1px] border-borderClr font-inter"
    >
      <button
        onClick={() => handler(id)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: '#6633DE',
            },
            closed: {
              color: '#262626',
            },
          }}
          className="text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
              color: '#6633DE',
            },
            closed: {
              rotate: '0deg',
              color: '#262626',
            },
          }}
        >
          <FiChevronDown className="text-2xl text-textDark" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: openId === id ? height : '0px',
          marginBottom: openId === id ? '24px' : '0px',
        }}
        className="overflow-hidden text-textLight"
      >
        <span ref={ref}>{children}</span>
      </motion.div>
    </motion.div>
  );
};

export default Question;
