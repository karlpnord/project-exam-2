import { motion } from "framer-motion";

const TranslateWrapper = ({
  children,
  reverse,
  duration,
}: {
  children: JSX.Element;
  reverse?: boolean;
  duration: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6 items-center"
    >
      {children}
    </motion.div>
  );
};

export default TranslateWrapper;