import test from '../../assets/test.jpg';
import { twMerge } from 'tailwind-merge';

interface Props {
  src: string;
  alt: string;
  large?: string;
}

const CardImage = ({ src, alt, large = '' }: Props) => {
  return (
    <figure
      className={twMerge('w-80 h-56 overflow-hidden rounded-t-md', large)}
    >
      <img
        className='w-full h-full object-cover'
        src={src ? src : test}
        alt={alt ? alt : 'Product image'}
      />
    </figure>
  );
};

export default CardImage;
