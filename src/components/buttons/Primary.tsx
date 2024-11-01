import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Primary = ({ children }: Props) => {
	return (
		<button className='bg-primary text-primaryContent px-4 py-2 rounded-md text-lg font-medium font-inter hover:bg-primaryDark transition-all'>
			{children}
		</button>
	);
};

export default Primary;
