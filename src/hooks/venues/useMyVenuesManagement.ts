import { useState } from 'react';
import { VenueData } from '../../types/venueTypes';
import { useDeleteVenue } from './useDeleteVenue';
import { useVenuesAuthenticated } from './useVenuesAuthenticated';

export const useMyVenuesManagement = (
  apiUrl: string,
  accessToken: string | undefined
) => {
  const [viewBookings, setViewBookings] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [venueId, setVenueId] = useState('');
  const [selectedVenue, setSelectedVenue] = useState<VenueData>(
    {} as VenueData
  );
  const [notificationText, setNotificationText] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { data, isSuccess, isLoading } = useVenuesAuthenticated(
    apiUrl,
    accessToken
  );

  const { mutate: deleteVenue } = useDeleteVenue(accessToken);

  const toggleViewBookings = (venueId: string) => {
    setViewBookings((prev) => ({
      ...prev,
      [venueId]: !prev[venueId],
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

  return {
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
  };
};
