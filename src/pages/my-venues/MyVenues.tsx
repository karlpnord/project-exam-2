import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import { useAuth } from '../../hooks/useAuth';
import MyVenuesContent from '../../components/my-venues/MyVenuesContent';
import UserError from '../../utils/UserError';

const MyVenues = () => {
  const { user } = useAuth();

  return (
    <main className="flex-1">
      <MaxWidthWrapper className="pb-12 pt-24 md:pb-36 md:pt-36 max-w-[1000px]">
        {(!user || !user.venueManager) && (
          <UserError
            user={user}
            loginErrorMsg={
              'You are not signed in! Please sign in to view your venues.'
            }
            venueManagerErrorMsg={
              'You are not a venue manager! Please go to profile settings to become a venue manager!'
            }
          />
        )}
        {user && user.venueManager && <MyVenuesContent user={user} />}
      </MaxWidthWrapper>
    </main>
  );
};

export default MyVenues;
