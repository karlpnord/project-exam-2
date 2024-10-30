import test from '../../../assets/test.jpg';
import { FaCircle, FaStar, FaWifi, FaSquareParking, FaUtensils, FaDog, FaUserLarge } from "react-icons/fa6";
import { motion } from "framer-motion";
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
};

const Card = ({ className, style = {} }: CardProps) => {
  return (
    <motion.a 
      className={twMerge(
        "flex flex-col max-w-sm rounded-md shadow-md font-inter cursor-pointer",
        className
      )}
      style={style}
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.25,
      }}
    >
      <img className="max-w-full rounded-t-md" src={test} alt="image" />
      <div className="px-4 py-3 border-b border-borderClr bg-foreground">
        <div className="flex items-center gap-3">
          <h2 className="font-medium tracking-tight text-textLight uppercase">Oslo, Norway</h2>
          <FaCircle className="text-textLight text-[6px]" />
          <div className="flex items-center gap-1">
            <span className="text-textLight">4.9</span>
            <FaStar className="text-textLight text-sm" />
          </div>
        </div>
        <h3 className="font-semibold text-lg text-textDark">€100,00 per night</h3>
        <h4 className="text-textLighter text-sm">Address</h4>
      </div>
      
      <div className="px-4 py-3 border-b border-borderClr bg-foreground">
        <div className="flex justify-between items-center">
          <div className="flex text-textLight gap-2">
            <FaWifi />
            <FaSquareParking />
            <FaUtensils />
            <FaDog />
          </div>
          <div className="flex items-center gap-1 text-textDark">
            <span className="text-textLight text-sm">3</span>
            <FaUserLarge />
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-defaultBg">
        <h2 className="text-textLight text-xs mb-1 uppercase">Realtor</h2>
        <h3 className="text-textDark font-semibold text-sm mb-[-4px]">Ola Nordmann</h3>
        <h4 className="text-textDark font-semibold text-sm">email@email.com</h4>
      </div>

    </motion.a>
  );
};

export default Card;
