import { FaUser, FaTwitter } from 'react-icons/fa6';
import { ReviewData } from './reviewsData';

interface ReviewCardProps {
  review: ReviewData;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className='bg-foreground py-4 px-6 rounded-md border border-borderClr min-w-80 h-fit'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <FaUser className='text-secondary text-2xl' />
          <div className='flex flex-col'>
            <h4 className='text-textDark text-[12px] mb-[-5px]'>
              {review.username}
            </h4>
            <h5 className='text-textLighter text-[10px]'>
              {review.twitterHandle}
            </h5>
          </div>
        </div>
        <FaTwitter className='text-primary text-xl' />
      </div>
      <p className='text-textLight font-medium text-[12px] mt-3'>
        {review.review}
      </p>
    </div>
  );
};

export default ReviewCard;
