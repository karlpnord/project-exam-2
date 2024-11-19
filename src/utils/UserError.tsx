import { LoginResponseData } from '../types/loginTypes';
import { Link } from 'react-router-dom';
import DefaultNoBg from '../components/buttons/DefaultNoBg';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { MdError } from 'react-icons/md';

interface Props {
  user: LoginResponseData | null;
  loginErrorMsg: string;
  venueManagerErrorMsg?: string;
}

const UserError = ({ user, loginErrorMsg, venueManagerErrorMsg }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    try {
      navigate(-1);
    } catch (error) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="flex justify-center items-center pb-60 pt-12 md:pb-0 md:pt-0"
    >
      {!user ? (
        <div className="bg-foreground text-error border border-borderClr py-8 px-6 sm:px-12 rounded-md shadow-md max-w-md">
          <div className="mb-4 text-error grid place-items-center mx-auto">
            <MdError size={48} />
          </div>
          <p className="text-center mb-6 font-medium">{loginErrorMsg}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <Link to="/sign-in">
              <DefaultNoBg className="bg-error text-errorContent px-6 hover:bg-red-700">
                Sign In
              </DefaultNoBg>
            </Link>
            <DefaultNoBg
              clickHandler={handleNavigate}
              className="px-6 text-error"
            >
              Go Back
            </DefaultNoBg>
          </div>
        </div>
      ) : (
        <div className="bg-foreground text-error border border-borderClr py-8 px-6 sm:px-12 rounded-md shadow-md max-w-md">
          <div className="mb-4 text-error grid place-items-center mx-auto">
            <MdError size={48} />
          </div>
          <p className="text-center mb-6 font-medium">{venueManagerErrorMsg}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <Link to="/profile">
              <DefaultNoBg className="bg-error text-errorContent px-6 hover:bg-red-700">
                Profile Settings
              </DefaultNoBg>
            </Link>
            <DefaultNoBg
              clickHandler={handleNavigate}
              className="px-6 text-error"
            >
              Go Back
            </DefaultNoBg>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default UserError;
