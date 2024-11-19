import {
  FaClock,
  FaLock,
  FaHouseChimney,
  FaBook,
  FaMagnifyingGlass,
} from 'react-icons/fa6';
import { FaHeadphones } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface FeatureData {
  title: string;
  description: string;
  icon: IconType;
}

const featuresData = [
  {
    title: 'Quick Booking',
    description:
      'Book your ideal venue effortlessly with our fast and user-friendly platform.',
    icon: FaClock,
  },
  {
    title: 'Verified Listings',
    description:
      'Enjoy peace of mind with thoroughly verified hosts and venues.',
    icon: FaLock,
  },
  {
    title: 'Variety of Venues',
    description:
      'Discover diverse properties, from apartments to villas, for any occasion.',
    icon: FaHouseChimney,
  },
  {
    title: 'List your Venues',
    description:
      'Easily list your property and start earning as a host on Holidaze.',
    icon: FaBook,
  },
  {
    title: '24/7 Support',
    description:
      'Get round-the-clock assistance from our dedicated customer support team.',
    icon: FaHeadphones,
  },
  {
    title: 'Advanced Search',
    description:
      'Quickly find the perfect venue using powerful filters and search options.',
    icon: FaMagnifyingGlass,
  },
];

export default featuresData;
