import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface StatItemProps {
	num: number;
	suffix: string;
	decimals?: number;
	subheading: string;
}

const StatItem = ({ num, suffix, decimals = 0, subheading }: StatItemProps) => {
	const ref = useRef<HTMLSpanElement | null>(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (!isInView) return;

		animate(0, num, {
			duration: 2.5,
			onUpdate(value) {
				if (!ref.current) return;
				ref.current.textContent = value.toFixed(decimals);
			},
		});
	}, [num, decimals, isInView]);

	return (
		<div className='flex w-72 flex-col items-center py-8 sm:py-0'>
			<p className='mb-2 text-center text-7xl font-semibold text-textDark sm:text-6xl'>
				<span ref={ref}></span>
				<span className='text-primary'>{suffix}</span>
			</p>
			<p className='max-w-48 text-center text-textLight'>{subheading}</p>
		</div>
	);
};

export default StatItem;
