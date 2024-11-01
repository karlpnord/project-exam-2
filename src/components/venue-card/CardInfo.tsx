import { FaCircle, FaStar } from 'react-icons/fa';

interface Props {
  city: string;
  country: string;
  rating: number;
  price: number;
  name: string;
}

const CardInfo = ({ city, country, rating, price, name }: Props) => {
  return (
    <div className="px-4 py-3 border-b border-borderClr bg-foreground">
      <div className="flex items-center gap-3">
        <h2 className="font-medium tracking-tight text-textLight uppercase">
          {city ? city : 'City'}, {country ? country : 'Country'}
        </h2>
        <FaCircle className="text-textLight text-[4px]" />
        <div className="flex items-center gap-1">
          <span className="text-textLight">{rating}</span>
          <FaStar className="text-textLight text-sm" />
        </div>
      </div>
      <h3 className="font-semibold text-lg text-textDark">
        €{price} per night
      </h3>
      <h4 className="text-textLighter text-sm">{name}</h4>
    </div>
  );
};

export default CardInfo;
