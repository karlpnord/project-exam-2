import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import AddVenueForm from '../../components/forms/AddVenueForm';
import { useAuth } from '../../hooks/auth/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddVenueFormProps,
  addVenueFormSchema,
} from '../../components/forms/validations/addVenueFormSchema';
import PreviewAddVenueForm from '../../components/forms/components/PreviewAddVenueForm';
import UserError from '../../utils/UserError';
import PageHeader from '../../utils/PageHeader';
import { motion } from 'framer-motion';

const AddVenue = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddVenueFormProps>({
    resolver: yupResolver(addVenueFormSchema),
  });

  const venueData = watch();

  return (
    <main className="flex-1">
      <MaxWidthWrapper className="relative z-20 pb-12 pt-24 md:pb-36 md:pt-36 w-fit max-w-[1000px]">
        {(!user || !user.venueManager) && (
          <UserError
            user={user}
            loginErrorMsg={
              'You have to be signed in to add a venue! Please sign in to add a venue.'
            }
            venueManagerErrorMsg={
              'You are not a venue manager and cannot add a venue! Please go to profile settings to become a venue manager!'
            }
          />
        )}
        {user && user.venueManager && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut ' }}
          >
            <PageHeader heading="Add Your Venue" />
            <div className="bg-foreground border border-borderClr mt-12 p-4 md:p-8 rounded-md shadow-md overflow-hidden flex flex-col gap-12 lg:flex-row">
              <AddVenueForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                venueData={venueData}
              />
              <div className="border border-borderClr"></div>
              <PreviewAddVenueForm venueData={venueData} />
            </div>
          </motion.div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default AddVenue;
