import test from '../../assets/test.jpg';

interface Props {
	src: string;
	alt: string;
}

const CardImage = ({ src, alt }: Props) => {
	return (
		<figure className='w-80 h-56 overflow-hidden rounded-t-md'>
			<img className='w-full h-full object-cover' src={src ? src : test} alt={alt ? alt : 'Product image'} />
		</figure>
	);
};

export default CardImage;
