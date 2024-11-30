import { motion } from 'framer-motion';
import { FeatureData } from './featuresData';

interface FeatureCardProps {
  feature: FeatureData;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={childVariants}
      className='flex flex-col gap-1 h-full w-[280px] md:w-[320px] bg-foreground border border-borderClr shadow-md rounded-lg p-6'
    >
      <div className='bg-primary p-2 w-fit rounded-md mb-1'>
        <feature.icon className='text-primaryContent' size={20} />
      </div>
      <h2 className='font-poppins font-semibold text-lg text-textDark'>
        {feature.title}
      </h2>
      <p className='text-textLight font-light text-xs leading-5 sm:text-sm'>
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
