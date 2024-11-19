import { LoginResponseData } from '../../types/loginTypes';
import { usePostsAuthenticated } from '../../hooks/usePostsAuthenticated';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDeleteVenue } from '../../hooks/useDeleteVenue';
import DeleteVenueModal from './DeleteVenueModal';
import SuccessNotification from '../../utils/SuccessNotification';
import UpdateVenueModal from './UpdateVenueModal';
import Loader from '../../utils/Loader';
import MyVenuesCard from './MyVenuesCard';
import { VenueData } from '../../types/venueTypes';
import NoVenuesContainer from './NoVenuesContainer';
import PageHeader from '../../utils/PageHeader';

interface Props {
  user: LoginResponseData | null;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const MyVenuesContent = ({ user }: Props) => {
  const [viewBookings, setViewBookings] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [venueId, setVenueId] = useState<string>('');
  const [selectedVenue, setSelectedVenue] = useState<VenueData>(
    {} as VenueData
  );
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);

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

  const handleUpdate = (venue: VenueData) => {
    setSelectedVenue(venue);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (venueId: string) => {
    setIsDeleteModalOpen(true);
    setVenueId(venueId);
  };

  const confirmDelete = () => {
    if (venueId) {
      deleteVenue(venueId, {
        onSuccess: () => {
          setNotificationText('Venue deleted successfully!');
          setIsDeleteModalOpen(false);
        },
        onError: () => {
          setNotificationText('Failed to delete the venue!');
        },
      });
    }
  };

  return (
    <>
      <PageHeader heading="My Venues" />
      {isLoading && <Loader className="mt-12" />}
      {isSuccess && (
        <>
          {data.data.length === 0 && <NoVenuesContainer />}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-8 items-center mt-12"
          >
            {data.data.map((venue: VenueData) => (
              <MyVenuesCard
                key={venue.id}
                venue={venue}
                viewBookings={viewBookings[venue.id] || false}
                toggleViewBookings={toggleViewBookings}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ))}
          </motion.div>
        </>
      )}
      {isDeleteModalOpen && (
        <DeleteVenueModal
          setIsModalOpen={setIsDeleteModalOpen}
          confirmDelete={confirmDelete}
        />
      )}
      {notificationText && (
        <SuccessNotification
          text={notificationText}
          removeNotif={() => setNotificationText(null)}
        />
      )}
      {isUpdateModalOpen && (
        <UpdateVenueModal
          venueData={selectedVenue}
          setIsModalOpen={setIsUpdateModalOpen}
          setUpdateSuccess={setUpdateSuccess}
        />
      )}
      {updateSuccess && (
        <SuccessNotification
          text="Venue updated successfully!"
          removeNotif={() => setUpdateSuccess(false)}
        />
      )}
    </>
  );
};

export default MyVenuesContent;
