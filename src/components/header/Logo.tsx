import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center flex-shrink-0">
      <FaBed className="w-10 h-10 mr-2" />
      <span className="text-xl tracking-tight font-bold font-poppins">
        holidaze
      </span>
    </Link>
  );
};

export default Logo;
