import PricingDetails from './PricingDetails';

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  guests: string;
  setGuests: (value: string) => void;
  price: number;
}

const BookingDetails = ({
  startDate,
  endDate,
  guests,
  setGuests,
  price,
}: Props) => {
  return (
    <>
      <div className="border border-borderClr rounded-md">
        <div className="flex justify-between">
          <div className="flex-1 border-r border-borderClr px-4 py-3">
            <h2 className="text-textDark text-xs">Start Date</h2>
            <h3 className="text-textLight font-semibold text-sm">
              {startDate
                ? startDate.toLocaleDateString('en-GB')
                : 'Select start date'}
            </h3>
          </div>
          <div className="flex-1 px-4 py-3">
            <h2 className="text-textDark text-xs">End Date</h2>
            <h3 className="text-textLight font-semibold text-sm">
              {endDate
                ? endDate.toLocaleDateString('en-GB')
                : 'Select end date'}
            </h3>
          </div>
        </div>
        <div className="flex-1 border-t border-borderClr px-4 py-3">
          <h2 className="text-textDark text-xs">Guests</h2>
          <label className="hidden" htmlFor="guests">
            Guests
          </label>
          <input
            type="text"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="0"
            className="w-full bg-foreground text-textLight font-semibold text-sm focus:outline-none"
          />
        </div>
      </div>
      <PricingDetails price={price} startDate={startDate} endDate={endDate} />
    </>
  );
};

export default BookingDetails;
