import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import { useAuth } from '../../hooks/auth/useAuth';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from '../../components/profile/Tabs';
import ProfileTabContent from '../../components/profile/ProfileTabContent';
import BookingsTabContent from '../../components/profile/BookingsTabContent';
import SettingsTabContent from '../../components/profile/SettingsTabContent';
import Logo from '../../components/header/Logo';
import UserError from '../../utils/UserError';
import { useParams } from 'react-router-dom';
import { validateTab } from '../../utils/utils';

type ActiveTab = 'profile' | 'bookings' | 'settings';

const Profile = () => {
  const { tab } = useParams();

  const [activeTab, setActiveTab] = useState<ActiveTab>(validateTab(tab));
  const { user } = useAuth();

  const clickHandler = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <main className='flex-1 font-inter'>
      <MaxWidthWrapper className='flex flex-col gap-8 px-0 sm:px-6 pb-12 pt-24 md:pb-36 md:pt-36 max-w-[1000px]'>
        {!user && (
          <UserError
            user={user}
            loginErrorMsg={
              'You have to be signed in to view your profile! Click below to sign in.'
            }
          />
        )}
        {user && (
          <div className='flex flex-col border border-borderClr rounded-md overflow-hidden'>
            <div className='flex flex-col w-full bg-foreground text-textDark p-4 border-b border-borderClr'>
              <Logo />
              <h2 className='font-bold text-lg text-textLight'>
                {user.name}'s profile
              </h2>
            </div>
            <div className='flex'>
              <Tabs activeTab={activeTab} clickHandler={clickHandler} />
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-full flex-grow bg-foreground'
              >
                {activeTab === 'profile' && (
                  <ProfileTabContent
                    user={user}
                    openSettings={() => clickHandler('settings')}
                    openBookings={() => clickHandler('bookings')}
                  />
                )}
                {activeTab === 'bookings' && <BookingsTabContent user={user} />}
                {activeTab === 'settings' && <SettingsTabContent user={user} />}
              </motion.div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default Profile;
