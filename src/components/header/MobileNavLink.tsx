import { ReactNode, Dispatch, SetStateAction, useState } from 'react';
import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';

interface MobileNavLinkProps {
	children: ReactNode;
	href: string;
	FoldContent?: () => JSX.Element;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavLink = ({ children, href, FoldContent, setMenuOpen }: MobileNavLinkProps) => {
	const [ref, { height }] = useMeasure();
	const [open, setOpen] = useState(false);

	return (
		<div className='relative text-neutral-950'>
			{FoldContent ? (
				<div
					className='flex w-full cursor-pointer items-center text-textLight justify-between border-b border-neutral-300 py-6 text-start text-xl font-semibold hover:text-textDark'
					onClick={() => setOpen((prevValue) => !prevValue)}
				>
					<a
						onClick={(e) => {
							e.stopPropagation();
							setMenuOpen(false);
						}}
						href={href}
					>
						{children}
					</a>
					<motion.div
						animate={{ rotate: open ? '180deg' : '0deg' }}
						transition={{
							duration: 0.3,
							ease: 'easeOut',
						}}
					>
						<FiChevronDown />
					</motion.div>
				</div>
			) : (
				<a
					onClick={(e) => {
						e.stopPropagation();
						setMenuOpen(false);
					}}
					href='#'
					className='flex w-full cursor-pointer items-center text-textLight justify-between border-b border-neutral-300 py-6 text-start text-xl font-semibold hover:text-textDark'
				>
					<span>{children}</span>
					<FiArrowRight />
				</a>
			)}
			{FoldContent && (
				<motion.div
					initial={false}
					animate={{
						height: open ? height : '0px',
						marginBottom: open ? '24px' : '0px',
						marginTop: open ? '12px' : '0px',
					}}
					className='overflow-hidden'
				>
					<div ref={ref}>
						<FoldContent />
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default MobileNavLink;
