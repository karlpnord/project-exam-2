import { FaGoogle, FaApple } from 'react-icons/fa6';

const ExtraDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full p-2">
        <div className="border-b border-borderClr flex-1 self-center"></div>
        <span className="text-center text-textLighter text-sm font-light px-6">
          Or register with
        </span>
        <div className="border-b border-borderClr flex-1 self-center"></div>
      </div>
      <div className="flex gap-4">
        <button
          disabled
          className="flex items-center justify-center gap-2 border border-borderClr px-6 py-2 flex-1 rounded-md text-textLight transition hover:bg-defaultBg"
        >
          <FaGoogle className="text-textDark" />
          Google
        </button>
        <button
          disabled
          className="flex items-center justify-center gap-2 border border-borderClr px-6 py-2 flex-1 rounded-md text-textLight transition hover:bg-defaultBg"
        >
          <FaApple className="text-textDark" />
          Apple
        </button>
      </div>
    </div>
  );
};

export default ExtraDetails;
