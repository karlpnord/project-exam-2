import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLogout } from '../../hooks/useLogout';

const NavCTAs = () => {
  const { user } = useAuth();
  const logout = useLogout();

  return (
    <div className="flex items-center gap-3 font-inter">
      {user ? (
        <Link
          to="/"
          onClick={logout}
          className="bg-secondary text-secondaryContent px-6 py-2 rounded-md hover:bg-secondaryDark transition"
        >
          Logout
        </Link>
      ) : (
        <>
          <Link
            to="/sign-up"
            className="bg-whiteBg text-secondary px-6 py-2 rounded-md hover:bg-defaultBg transition"
          >
            Sign up
          </Link>
          <Link
            to="/sign-in"
            className="bg-secondary text-secondaryContent px-6 py-2 rounded-md hover:bg-secondaryDark transition"
          >
            Sign in
          </Link>
        </>
      )}
    </div>
  );
};

export default NavCTAs;
