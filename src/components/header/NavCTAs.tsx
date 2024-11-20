import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLogout } from '../../hooks/useLogout';

interface Props {
  setOpen?: (open: boolean) => void;
}

const NavCTAs = ({ setOpen }: Props) => {
  const { user } = useAuth();
  const logout = useLogout();

  const handleLogout = () => {
    setOpen && setOpen(false);
    logout();
  };

  const handleClick = () => {
    setOpen && setOpen(false);
  };

  return (
    <div className="flex items-center gap-3 font-inter">
      {user ? (
        <Link
          to="/"
          onClick={handleLogout}
          className="bg-secondary text-secondaryContent px-6 py-2 rounded-md hover:bg-secondaryDark transition"
        >
          Logout
        </Link>
      ) : (
        <>
          <Link
            onClick={handleClick}
            to="/sign-up"
            className="bg-whiteBg text-secondary px-6 py-2 rounded-md hover:bg-defaultBg transition"
          >
            Sign up
          </Link>
          <Link
            onClick={handleClick}
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
