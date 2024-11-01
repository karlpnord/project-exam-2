import StatItem from './StatItem';

const Stats = () => {
	return (
		<div className='relative overflow-hidden border-y border-borderClr bg-defaultBg font-inter'>
			<div className='relative z-20 mx-auto max-w-3xl px-4 py-20'>
				<h2 className='mx-auto mb-9 block w-fit text-textDark text-center text-xl font-medium'>
					Building trust with <span className='text-secondary font-bold'>every booking</span>
				</h2>

				<div className='flex flex-col items-center justify-center sm:flex-row'>
					<StatItem num={10} suffix='K+' subheading='Join a large, trusted comminunity of users' />
					<div className='h-[1px] w-12 bg-textLighter sm:h-12 sm:w-[1px]' />
					<StatItem num={1.5} decimals={1} suffix='K+' subheading='Explore a variety of safe, verified venues' />
					<div className='h-[1px] w-12 bg-textLighter sm:h-12 sm:w-[1px]' />
					<StatItem num={98} suffix='%' subheading='Reliable support whenever you need it' />
				</div>
			</div>
		</div>
	);
};

export default Stats;
