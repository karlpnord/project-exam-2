import { twMerge } from 'tailwind-merge';

interface Props {
	className?: string;
}

const Loader = ({ className }: Props) => {
	return (
		<div className='flex justify-center items-center pt-12 pb-8'>
			<div
				className={twMerge(
					`${className} border-gray-300 h-28 w-28 lg:w-40 lg:h-40 animate-spin rounded-full border-8 border-t-primary`
				)}
			/>
		</div>
	);
};

export default Loader;
