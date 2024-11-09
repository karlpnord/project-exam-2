import { LoginResponseData } from '../../types/loginTypes';
import { usePostsAuthenticated } from '../../hooks/usePostsAuthenticated';
import CardImage from '../venue-card/CardImage';
import CardInfo from '../venue-card/CardInfo';
import CardFacilities from '../venue-card/CardFacilities';
import CardInteractions from '../venue-card/CardInteractions';
import CardBookings from '../venue-card/CardBookings';
import { VenueData } from '../../types/venueTypes';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDeleteVenue } from '../../hooks/useDeleteVenue';
import DeleteVenueModal from './DeleteVenueModal';
import DeleteNotification from './DeleteNotification';
import Loader from '../../utils/Loader';

interface Props {
  user: LoginResponseData | null;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const MyVenuesContent = ({ user }: Props) => {
  const [viewBookings, setViewBookings] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [venueId, setVenueId] = useState<string>('');
  const [notificationText, setNotificationText] = useState<string | null>(null);

  const { data, isSuccess, isLoading } = usePostsAuthenticated(
    `${apiBaseUrl}/profiles/${user?.name}/venues?_bookings=true`,
    user?.accessToken
  );

  const { mutate: deleteVenue } = useDeleteVenue(user?.accessToken);

  const toggleViewBookings = (venueId: string) => {
    setViewBookings((prevState) => ({
      ...prevState,
      [venueId]: !prevState[venueId],
    }));
  };

  const handleDelete = (venueId: string) => {
    setIsModalOpen(true);
    setVenueId(venueId);
  };

  const confirmDelete = () => {
    if (venueId) {
      deleteVenue(venueId, {
        onSuccess: () => {
          setNotificationText('Venue deleted successfully!');
          setIsModalOpen(false);
        },
        onError: () => {
          setNotificationText('Failed to delete the venue!');
        },
      });
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-textDark">My Venues</h1>
      </div>
      {isLoading && <Loader />}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex flex-col gap-8 items-center mt-12"
        >
          {data.data.map((venue: VenueData) => (
            <div
              key={venue.id}
              className="shadow-md rounded-md overflow-hidden"
            >
              <CardImage
                src={venue.media?.[0]?.url}
                alt={venue.media?.[0]?.alt}
                large={'md:w-[500px] md:h-72'}
              />
              <CardInfo
                city={venue.location.city}
                country={venue.location.country}
                rating={venue.rating}
                price={venue.price}
                name={venue.name}
              />
              <CardFacilities meta={venue.meta} maxGuests={venue.maxGuests} />
              <CardInteractions
                toggleViewBookings={() => toggleViewBookings(venue.id)}
                isViewingBookings={viewBookings[venue.id] || false}
                handleDelete={() => handleDelete(venue.id)}
              />
              <AnimatePresence>
                {viewBookings[venue.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <CardBookings bookings={venue.bookings} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
      {isModalOpen && (
        <DeleteVenueModal
          setIsModalOpen={setIsModalOpen}
          confirmDelete={confirmDelete}
        />
      )}
      {notificationText && (
        <DeleteNotification
          text={notificationText}
          removeNotif={() => setNotificationText(null)}
        />
      )}
    </>
  );
};

export default MyVenuesContent;
