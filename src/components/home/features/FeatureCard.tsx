import { motion } from 'framer-motion';
import { FeatureData } from './featuresData';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge('p-[2px] rounded-md flex-1', feature.gradient)}
      variants={childVariants}
    >
      <div className="flex flex-col gap-2 h-full w-full max-w-[360px] bg-foreground rounded-[calc(0.375rem-1px)] p-4">
        <div
          className={twMerge(
            'p-2 w-fit text-lg rounded-md',
            feature.primary,
            feature.accent
          )}
        >
          <feature.icon />
        </div>
        <h2 className="font-poppins font-semibold text-xl text-textDark">
          {feature.title}
        </h2>
        <p className="text-textLight font-light text-xs leading-5 sm:test-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
