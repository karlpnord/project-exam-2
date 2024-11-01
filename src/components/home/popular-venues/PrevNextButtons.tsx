import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface Props {
	shiftRight: boolean;
	shiftLeft: boolean;
	onClickPrev: () => void;
	onClickNext: () => void;
}

const PrevNextButtons = ({ shiftRight, shiftLeft, onClickPrev, onClickNext }: Props) => {
	return (
		<div className='flex items-center justify-center gap-2 mt-10'>
			<button
				className={`rounded-md border-[1px] border-borderClr bg-foreground p-2.5 text-2xl transition-opacity ${
					shiftLeft ? '' : 'opacity-30'
				}`}
				disabled={!shiftLeft}
				onClick={onClickPrev}
			>
				<FiArrowLeft />
			</button>
			<button
				className={`rounded-md border-[1px] border-borderClr bg-foreground p-2.5 text-2xl transition-opacity ${
					shiftRight ? '' : 'opacity-30'
				}`}
				disabled={!shiftRight}
				onClick={onClickNext}
			>
				<FiArrowRight />
			</button>
		</div>
	);
};

export default PrevNextButtons;
