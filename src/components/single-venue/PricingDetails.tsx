import {
  calculateBookingCost,
  calculateNumberofNights,
} from '../../utils/utils';

interface Props {
  price: number;
  startDate: Date | null;
  endDate: Date | null;
}

const PricingDetails = ({ price, startDate, endDate }: Props) => {
  const totalCost =
    startDate && endDate
      ? calculateBookingCost(
        startDate.toISOString(),
        endDate.toISOString(),
        price
      )
      : 0;

  const nights =
    startDate && endDate ? calculateNumberofNights(startDate, endDate) : 0;

  return (
    <div className='space-y-1 text-textDark font-semibold'>
      <div className='flex justify-between'>
        <h2>
          {price.toFixed(2)}€ x {nights.toFixed(0)} nights
        </h2>
        <h2>{totalCost.toFixed(2)}€</h2>
      </div>
      <div className='flex justify-between'>
        <h2>Service Fee</h2>
        <h2>100.00€</h2>
      </div>
      <div className='border border-borderClr'></div>
      <div className='flex justify-between'>
        <h2>Total:</h2>
        <h2>{(totalCost + 100).toFixed(2)}€</h2>
      </div>
    </div>
  );
};

export default PricingDetails;
