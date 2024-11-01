import { twMerge } from 'tailwind-merge';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const MaxWidthWrapper = ({ children, className = '' }: Props) => {
	return <section className={twMerge('mx-auto max-w-[1400px] px-4 md:px-8', className)}>{children}</section>;
};

export default MaxWidthWrapper;
