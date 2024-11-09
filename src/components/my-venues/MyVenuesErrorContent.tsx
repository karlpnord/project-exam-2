import { LoginResponseData } from '../../types/loginTypes';
import { Link } from 'react-router-dom';
import DefaultNoBg from '../buttons/DefaultNoBg';
import { FiAlertCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { motion } from 'framer-motion';

interface Props {
  user: LoginResponseData | null;
}

const MyVenuesErrorContent = ({ user }: Props) => {
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
        <div className="bg-gradient-to-br from-error to-red-800 text-errorContent py-8 px-6 sm:px-12 rounded-lg shadow-md max-w-md">
          <div className="bg-white w-16 h-16 mb-4 rounded-full text-3xl text-error grid place-items-center mx-auto">
            <FiAlertCircle />
          </div>
          <p className="text-center mb-6">
            You are not signed in! Please sign in to view your venues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <Link to="/sign-in">
              <DefaultNoBg className="bg-red-800 text-errorContent transition-colors font-semibold w-full py-2 px-8 hover:bg-white/10">
                Sign In
              </DefaultNoBg>
            </Link>
            <button
              onClick={handleNavigate}
              className="py-2 px-8 font-semibold text-errorContent hover:bg-white/10 transition-colors rounded-md"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-error to-red-800 text-errorContent py-8 px-6 sm:px-12 rounded-lg shadow-md max-w-md">
          <div className="bg-white w-16 h-16 mb-4 rounded-full text-3xl text-error grid place-items-center mx-auto">
            <FiAlertCircle />
          </div>
          <p className="text-center mb-6">
            You are not a venue manager! Please go to profile settings to become
            a venue manager!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <Link to="/profile">
              <DefaultNoBg className="bg-red-800 text-errorContent transition-colors font-semibold w-full py-2 px-8 hover:bg-white/10">
                Profile Settings
              </DefaultNoBg>
            </Link>
            <button
              onClick={handleNavigate}
              className="py-2 px-8 font-semibold text-errorContent hover:bg-white/10 transition-colors rounded-md"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MyVenuesErrorContent;
