import { FaKiwiBird, FaEarthEurope, FaRoad, FaLocationDot, FaHotel } from 'react-icons/fa6';

const LogoItems = () => (
	<>
		<div className='flex items-center gap-2'>
			<FaKiwiBird className='text-3xl text-textDark' />
			<span className='font-bold text-2xl text-textDark'>TravelNest</span>
		</div>

		<div className='flex items-center gap-2'>
			<span className='text-textDark font-normal text-2xl'>Stay</span>
			<FaEarthEurope className='text-3xl text-textDark' />
			<span className='text-textDark font-normal text-2xl'>Sphere</span>
		</div>

		<div className='flex items-center gap-2'>
			<FaLocationDot className='text-3xl text-textDark' />
			<span className='font-bold text-2xl font-poppins text-textDark'>VenueHub</span>
		</div>

		<div className='flex items-center gap-2'>
			<FaRoad className='text-3xl text-textDark' />
			<span className='italic font-semibold text-2xl text-textDark'>OpenRoad</span>
		</div>

		<div className='flex items-center gap-2'>
			<FaHotel className='text-3xl text-textDark' />
			<span className='font-medium text-2xl text-textDark'>GlobalStays</span>
		</div>
	</>
);

export default LogoItems;
