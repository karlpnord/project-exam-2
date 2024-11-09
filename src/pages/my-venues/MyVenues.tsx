import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import { useAuth } from '../../hooks/useAuth';
import MyVenuesContent from '../../components/my-venues/MyVenuesContent';
import MyVenuesErrorContent from '../../components/my-venues/MyVenuesErrorContent';

const MyVenues = () => {
  const { user } = useAuth();

  return (
    <main className="flex-1">
      <MaxWidthWrapper className="relative z-20 pb-12 pt-24 md:pb-36 md:pt-36 max-w-[1000px]">
        {(!user || !user.venueManager) && <MyVenuesErrorContent user={user} />}
        {user && user.venueManager && <MyVenuesContent user={user} />}
      </MaxWidthWrapper>
    </main>
  );
};

export default MyVenues;
