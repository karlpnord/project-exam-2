import TranslateWrapper from '../../../utils/TranslateWrapper';
import LogoItems from './LogoItems';

const Logos = () => {
	return (
		<div className='bg-whiteBg'>
			<section className='mx-auto max-w-7xl overflow-hidden border-b border-borderClr py-6'>
				<span className='mx-auto mb-9 block w-fit text-textLighter text-center text-lg font-poppins'>
					Trusted by companies of all sizes
				</span>
				<div className='flex overflow-hidden relative'>
					<TranslateWrapper duration={50}>
						<LogoItems />
					</TranslateWrapper>
					<TranslateWrapper duration={50}>
						<LogoItems />
					</TranslateWrapper>
					<TranslateWrapper duration={50}>
						<LogoItems />
					</TranslateWrapper>
					<div className='absolute bottom-0 left-0 top-0 w-10 max-w-64 bg-gradient-to-r from-[#F6F6F6] to-zinc-950/0' />
					<div className='absolute bottom-0 right-0 top-0 w-10 max-w-64 bg-gradient-to-l from-[#F6F6F6] to-zinc-950/0' />
				</div>
			</section>
		</div>
	);
};

export default Logos;
