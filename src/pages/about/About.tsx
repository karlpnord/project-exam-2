import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import Stats from '../../components/home/stats/Stats';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex-1 font-inter bg-whiteBg"
    >
      <section>
        <MaxWidthWrapper className="pt-24 md:pt-36 max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:gap-12 pb-12 pt-8 text-center">
            <h1 className="text-textDark text-4xl md:text-5xl font-bold">
              Our Mission & Vision
            </h1>
            <div className="flex flex-col lg:flex-row mx-auto justify-center gap-6">
              <div className="flex flex-col gap-2 items-center border border-borderClr px-4 py-6 rounded-md max-w-[440px]">
                <h2 className="text-primary font-bold uppercase text-xs">
                  Our Mission
                </h2>
                <p className="text-textDark text-opacity-75">
                  To create a world where exploring is seamless and comfortable,
                  no matter where you are. We are dedicated to offering
                  reliable, personalized experiences that let our customers feel
                  at home, anywhere.
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center border border-borderClr px-4 py-6 rounded-md max-w-[440px]">
                <h2 className="text-secondary font-bold uppercase text-xs">
                  Our Vision
                </h2>
                <p className="text-textDark text-opacity-75">
                  To be the most trusted platform in travel and accommodation,
                  where customers feel connected and inspired to venture beyond
                  the ordinary, knowing they are supported every step of the
                  way.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <Stats className={'bg-whiteBg border-none mb-10'} />
    </motion.main>
  );
};

export default About;
