import EditButton from '../../buttons/EditButton';

interface Props {
  src: string;
  alt: string;
  openSettings: (arg: 'settings') => void;
}

const Banner = ({ src, alt, openSettings }: Props) => {
  return (
    <div className="flex flex-col gap-2 border border-borderClr p-2 md:p-4 rounded-md">
      <div className="flex justify-between">
        <h2 className="font-semibold text-textDark self-center">
          Profile Banner
        </h2>
        <EditButton
          className={'w-fit'}
          clickHandler={() => openSettings('settings')}
        />
      </div>
      <figure className="w-full h-16 rounded-md overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </figure>
    </div>
  );
};

export default Banner;
