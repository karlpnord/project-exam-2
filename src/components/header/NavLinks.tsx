import { FC, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavLinkProps {
	children: ReactNode;
	href: string;
	FlyoutContent?: FC;
}

const NavLink: FC<NavLinkProps> = ({ children, href, FlyoutContent }) => {
	const [open, setOpen] = useState(false);

	const showFlyout = FlyoutContent && open;

	return (
		<div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='relative h-fit w-fit'>
			<Link to={href} className='relative text-textLight hover:text-textDark font-inter'>
				{children}
			</Link>
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						style={{ translateX: '-50%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='absolute left-1/2 top-12 bg-white text-black'
					>
						<div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
						<div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-whiteBg' />
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default NavLink;
