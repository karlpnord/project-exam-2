import { truncateText } from '../../utils/utils';
import { FaAngleRight } from 'react-icons/fa6';
import DescriptionModal from './DescriptionModal';
import { useState } from 'react';

interface Props {
  desc: string;
}

const SingleVenueDescription = ({ desc }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-[320px] md:w-[500px] p-4 mt-8 bg-foreground rounded-md">
        <h2 className="uppercase text-sm font-bold text-textDark">
          About this venue
        </h2>
        <p className="text-textLight">{truncateText(desc, 180)}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center text-textDark font-semibold underline mt-2"
        >
          Read more
          <FaAngleRight size={14} className="mb-[-2px]" />
        </button>
      </div>
      {isModalOpen && (
        <DescriptionModal desc={desc} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default SingleVenueDescription;
