import MaxWidthWrapper from '../../../utils/MaxWidthWrapper';
import FeatureCard from './FeatureCard';
import featuresData from './featuresData';
import SectionHeading from '../../../utils/SectionHeading';
import { motion } from 'framer-motion';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-whiteBg font-inter">
      <MaxWidthWrapper className="py-20 flex flex-col gap-8">
        <SectionHeading
          heading={'Features & Benefits'}
          subheading={
            'Holidaze offers a fast, secure, and easy way to find or list venues. Explore the key features that make your booking experience seamless and stress-free.'
          }
        />
        <motion.div
          className="grid mx-auto w-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
