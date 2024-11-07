import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import AddVenueForm from '../../components/forms/AddVenueForm';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddVenueFormProps,
  addVenueFormSchema,
} from '../../components/forms/validations/addVenueFormSchema';
import PreviewAddVenueForm from '../../components/forms/components/PreviewAddVenueForm';
import Primary from '../../components/buttons/Primary';
import { Link } from 'react-router-dom';

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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark">Add Your Venue</h1>
        </div>
        {user ? (
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
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-error text-center font-semibold text-xl">
              You have to be logged in to an account to add a venue!
            </h2>
            <Link to="/sign-in" className="mt-2">
              <Primary>Sign in now</Primary>
            </Link>
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default AddVenue;
