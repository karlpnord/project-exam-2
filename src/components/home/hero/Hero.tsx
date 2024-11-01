import MaxWidthWrapper from '../../../utils/MaxWidthWrapper';
import { motion } from 'framer-motion';
import Primary from '../../buttons/Primary';
import DefaultNoBg from '../../buttons/DefaultNoBg';

const Hero = () => {
	return (
		<div className='bg-whiteBg'>
			<MaxWidthWrapper className='relative z-20 flex flex-col items-center justify-center pb-12 pt-24 md:pb-36 md:pt-36'>
				<motion.h1
					initial={{
						y: 25,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.25,
						delay: 0.25,
						ease: 'easeInOut',
					}}
					className='mb-3 text-center text-3xl font-bold leading-tight text-textDark sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight'
				>
					Find your perfect venue with ease and trust
				</motion.h1>
				<motion.p
					initial={{
						y: 25,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.25,
						delay: 0.5,
						ease: 'easeInOut',
					}}
					className='mb-9 max-w-2xl text-center text-base text-zinc-400 sm:text-lg md:text-xl'
				>
					Explore unique venues or list your own for unforgettable experiences.
				</motion.p>
				<motion.div
					initial={{
						y: 25,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.25,
						delay: 0.75,
						ease: 'easeInOut',
					}}
					className='flex flex-col items-center gap-4 sm:flex-row'
				>
					<Primary>All Venues</Primary>
					<DefaultNoBg>Learn More</DefaultNoBg>
				</motion.div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Hero;
