import { FaBed } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex items-center flex-shrink-0">
      <FaBed className='w-10 h-10 mr-2'/>
      <span className='text-xl tracking-tight font-bold font-poppins'>holidaze</span>
    </div>
  );
};

export default Logo;