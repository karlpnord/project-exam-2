import { FaWifi, FaSquareParking, FaUtensils, FaDog } from "react-icons/fa6";
import { VenueMeta } from "../../../types/venueTypes";

interface VenueMetaIconsProps {
  meta: VenueMeta;
}

const VenueMetaIcons = ({ meta }: VenueMetaIconsProps) => {
  const icons: React.ReactNode[] = [];

  meta.wifi && icons.push(<FaWifi key={"wifi"} />);
  meta.parking && icons.push(<FaSquareParking key={'parking'} />);
  meta.breakfast && icons.push(<FaUtensils key={'breakfast'} />);
  meta.pets && icons.push(<FaDog key={'pets'} />);

  return (
    <div className="flex text-textLight gap-2">
      {icons.length > 0 ? (
        <>
          {icons}
        </>
      ) : (
        <div className="text-xs">No facilities</div>
      )}
    </div>
  );
};

export default VenueMetaIcons;
