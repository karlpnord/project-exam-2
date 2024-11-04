import { Link } from 'react-router-dom';

const NavCTAs = () => {
  return (
    <div className="flex items-center gap-3 font-inter">
      <Link
        to="/sign-up"
        className="bg-whiteBg text-secondary px-6 py-2 rounded-md hover:bg-defaultBg transition"
      >
        Sign up
      </Link>
      <button className="bg-secondary text-secondaryContent px-6 py-2 rounded-md hover:bg-secondaryDark transition">
        Sign in
      </button>
    </div>
  );
};

export default NavCTAs;
