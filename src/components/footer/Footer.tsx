import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import { SiInstagram, SiX, SiYoutube } from 'react-icons/si';
import GenericColumn from './GenericColumn';
import LogoColumn from './LogoColumn';

const Footer = () => {
  return (
    <footer className='relative z-50 overflow-hidden py-12 bg-defaultBg font-inter border-t border-borderClr'>
      <MaxWidthWrapper className='relative z-50 grid grid-cols-12 gap-x-1.5 gap-y-6'>
        <LogoColumn />
        <GenericColumn
          title='Explore Holidaze'
          links={[
            {
              title: 'Home',
              href: '/',
            },
            {
              title: 'Browse Venues',
              href: '/',
            },
            {
              title: 'Become a Host',
              href: '/',
            },
            {
              title: 'How it works',
              href: '/',
            },
            {
              title: 'Contact us',
              href: '/',
            },
          ]}
        />
        <GenericColumn
          title='Company Info'
          links={[
            {
              title: 'About us',
              href: '/',
            },
            {
              title: 'Careers',
              href: '/',
            },
            {
              title: 'Press',
              href: '/',
            },
            {
              title: 'Privacy Policy',
              href: '/',
            },
            {
              title: 'Terms & Conditions',
              href: '/',
            },
          ]}
        />
        <GenericColumn
          title='Socials'
          links={[
            {
              title: 'Twitter',
              href: '/#',
              Icon: SiX,
            },
            {
              title: 'Instagram',
              href: '/#',
              Icon: SiInstagram,
            },
            {
              title: 'Youtube',
              href: '/#',
              Icon: SiYoutube,
            },
          ]}
        />
        <GenericColumn
          title='Contact us'
          links={[
            {
              title: 'Email: support@holidaze.com',
              href: '/#',
            },
            {
              title: 'Phone: +1 234 567 890',
              href: '/#',
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
