import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import FAQ from '../../components/home/faq/FAQ';
import ContactCards from '../../components/contact/ContactCards';
import { FaBed } from 'react-icons/fa';
import { contactCardsData } from '../../components/contact/contactCardsData';
import SectionHeading from '../../utils/SectionHeading';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='flex-1 font-inter'
    >
      <MaxWidthWrapper className='pt-24 md:pt-36 max-w-[1200px]'>
        <div className='flex flex-col items-center'>
          <FaBed size={48} className='text-textDark' />
          <SectionHeading
            heading={'Contact our friendly team'}
            subheading={'Let us know how we can help you.'}
          />
        </div>
        <ContactCards data={contactCardsData} />
        <FAQ />
      </MaxWidthWrapper>
    </motion.main>
  );
};

export default Contact;
