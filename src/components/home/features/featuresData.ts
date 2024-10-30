import { FaClock, FaLock, FaHouseChimney, FaBook, FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { IconType } from "react-icons";

export interface FeatureData {
  title: string;
  description: string;
  icon: IconType;
  primary: string;
  accent: string;
  gradient: string;
}

const featuresData = [
  {
    title: 'Quick Booking',
    description: 'Book your dream venue in just a few clicks! Holidaze offers a user-friendly interface that makes the booking process smooth and fast, so you can spend less time searching and more time enjoying.',
    icon: FaClock,
    primary: 'text-[#5575DF]',
    accent: 'bg-[#ACCDFF]',
    gradient: `bg-gradient-to-r from-[#5575DF] to-[#ACCDFF]`,
  },
  {
    title: 'Verified Listings',
    description: 'All hosts and venues are thorougly verified, ensuring that you’re booking with trusted owners. Enjoy peace of mind knowing that each venue meets Holidaze’s safety and quality standards.',
    icon: FaLock,
    primary: 'text-[#DD8A41]',
    accent: 'bg-[#FFE0C5]',
    gradient: `bg-gradient-to-r from-[#DD8A41] to-[#FFE0C5]`,
  },
  {
    title: 'Variety of Venues',
    description: 'Find the perfect venue for any occasion! Holidaze offers a diverse range of properties, from cozy apartments to luxurious villas, making it easy to find the right space for your needs.',
    icon: FaHouseChimney,
    primary: 'text-[#54CE2E]',
    accent: 'bg-[#AEFF96]',
    gradient: `bg-gradient-to-r from-[#54CE2E] to-[#AEFF96]`,
  },
  {
    title: 'List your Venues',
    description: 'Become a host and start earning by listing your property on Holidaze. Whether it’s a spare or an entire house, listing your venue is simple and opens up new income opportunities.',
    icon: FaBook,
    primary: 'text-[#CE2727]',
    accent: 'bg-[#FFA8A8]',
    gradient: `bg-gradient-to-r from-[#CE2727] to-[#FFA8A8]`,
  },
  {
    title: '24/7 Support',
    description: 'Need help? Our dedicated customer support team is available 24/7 to assist you with any questions or issues. From booking inquiries to troubleshooting, we’ve got you covered.',
    icon: FaHeadphones,
    primary: 'text-[#8331DB]',
    accent: 'bg-[#D1A6FF]',
    gradient: `bg-gradient-to-r from-[#8331DB] to-[#D1A6FF]`,
  },
  {
    title: 'Advanced Search',
    description: 'Use our powerful search filters to quickly narrow down the perfect venue based on location, price, amenities, and more. Finding the ideal place for your stay has never been easier.',
    icon: FaMagnifyingGlass,
    primary: 'text-[#C93E9B]',
    accent: 'bg-[#FFACE3]',
    gradient: `bg-gradient-to-r from-[#C93E9B] to-[#FFACE3]`,
  },
];

export default featuresData;