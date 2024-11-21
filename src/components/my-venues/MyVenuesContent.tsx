import { LoginResponseData } from '../../types/loginTypes';
import { useMyVenuesManagement } from '../../hooks/venues/useMyVenuesManagement';
import DeleteVenueModal from './DeleteVenueModal';
import SuccessNotification from '../../utils/SuccessNotification';
import UpdateVenueModal from './UpdateVenueModal';
import Loader from '../../utils/Loader';
import NoVenuesContainer from './NoVenuesContainer';
import PageHeader from '../../utils/PageHeader';
import MyVenuesList from './MyVenuesList';

interface Props {
  user: LoginResponseData | null;
}

const MyVenuesContent = ({ user }: Props) => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiUrl = `${apiBaseUrl}/profiles/${user?.name}/venues?_bookings=true`;

  const {
    viewBookings,
    isUpdateModalOpen,
    isDeleteModalOpen,
    selectedVenue,
    notificationText,
    updateSuccess,
    data,
    isSuccess,
    isLoading,
    toggleViewBookings,
    handleUpdate,
    handleDelete,
    confirmDelete,
    setIsUpdateModalOpen,
    setIsDeleteModalOpen,
    setNotificationText,
    setUpdateSuccess,
  } = useMyVenuesManagement(apiUrl, user?.accessToken);

  return (
    <>
      <PageHeader heading="My Venues" />

      {isLoading && <Loader className="mt-12" />}

      {isSuccess && (
        <>
          {data.data.length === 0 && <NoVenuesContainer />}
          <MyVenuesList
            venues={data.data}
            viewBookings={viewBookings}
            toggleViewBookings={toggleViewBookings}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
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
