import DefaultNoBg from '../buttons/DefaultNoBg';
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotLoggedIn = () => {
  return (
    <div className="bg-gradient-to-br from-error to-red-800 text-errorContent py-8 px-6 sm:px-12 rounded-lg shadow-md">
      <div className="bg-white w-16 h-16 mb-4 rounded-full text-3xl text-error grid place-items-center mx-auto">
        <FiAlertCircle />
      </div>
      <p className="text-center mb-6">
        You have to be signed in to register a booking at this venue! Sign in to
        register a booking now.
      </p>
      <Link to="/sign-in">
        <DefaultNoBg className="bg-red-800 text-errorContent transition-colors font-semibold w-full py-2 px-8 hover:bg-white/10">
          Sign In Now
        </DefaultNoBg>
      </Link>
    </div>
  );
};

export default NotLoggedIn;
