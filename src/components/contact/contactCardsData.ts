import { IconType } from 'react-icons';
import { HiPencil } from 'react-icons/hi2';
import { TbMessageFilled } from 'react-icons/tb';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export interface ContactCardsDataProps {
  heading: string;
  description: string;
  icon: IconType;
  action: string;
}

export const contactCardsData: ContactCardsDataProps[] = [
  {
    heading: 'Submit a ticket',
    description: 'Have a specific issue?',
    icon: HiPencil,
    action: 'Create a ticket',
  },
  {
    heading: 'Chat with support',
    description: 'We are here to help!',
    icon: TbMessageFilled,
    action: 'support@holidaze.com',
  },
  {
    heading: 'Visit us',
    description: 'Visit our office HQ',
    icon: FaMapMarkerAlt,
    action: 'View on Google Maps',
  },
  {
    heading: 'Call us',
    description: 'Reach out for immediate assistance',
    icon: FaPhone,
    action: '+47 999 99 999',
  },
];
