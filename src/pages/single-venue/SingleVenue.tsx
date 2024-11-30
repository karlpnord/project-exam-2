import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import { useParams } from 'react-router-dom';
import { useSingleVenue } from '../../hooks/venues/useSingleVenue';
import Loader from '../../utils/Loader';
import SingleVenueCard from '../../components/single-venue/SingleVenueCard';
import SingleVenueDescription from '../../components/single-venue/SingleVenueDescription';
import { useAuth } from '../../hooks/auth/useAuth';
import UserError from '../../utils/UserError';
import BookingForm from '../../components/forms/BookingForm';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const SingleVenue = () => {
  const { venueId } = useParams();
  const { data, isSuccess, isLoading } = useSingleVenue(
    `${apiBaseUrl}/venues/${venueId}?_owner=true&_bookings=true`
  );
  const { user } = useAuth();

  return (
    <main className='flex-1 font-inter'>
      <MaxWidthWrapper className='flex flex-col gap-8 pb-12 pt-24 md:pb-36 md:pt-36 max-w-[1000px]'>
        {isLoading && <Loader />}

        {isSuccess && data && (
          <>
            <h1 className='font-bold text-5xl text-textDark text-center lg:col-span-2'>
              {data.data.name}
            </h1>
            <div className='flex flex-col items-center'>
              <SingleVenueCard venue={data.data} />
              <SingleVenueDescription desc={data.data.description} />
            </div>

            {user ? (
              <BookingForm data={data.data} />
            ) : (
              <UserError
                user={user}
                loginErrorMsg={
                  'You have to be signed in to register a booking! Please click below to sign in.'
                }
              />
            )}
          </>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default SingleVenue;
