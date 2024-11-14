import Calendar from 'react-calendar';
import { useBookedDates } from '../../hooks/useBookedDates';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece] | null;

interface Props {
  startDate: ValuePiece;
  setStartDate: (value: ValuePiece) => void;
  endDate: ValuePiece;
  setEndDate: (value: ValuePiece) => void;
  bookings: { dateFrom: string; dateTo: string }[];
}

const BookingCalendar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  bookings,
}: Props) => {
  const bookedDates = useBookedDates(bookings);

  const tileDisabled = ({ date }: { date: Date }) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.toLocaleDateString('en-GB') ===
        date.toLocaleDateString('en-GB')
    );
  };

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      setStartDate(value[0]);
      setEndDate(value[1]);
    } else {
      setStartDate(value);
      setEndDate(null);
    }
  };

  return (
    <Calendar
      locale="en-gb"
      onChange={handleDateChange}
      value={[startDate, endDate].filter(Boolean) as [Date, Date]}
      selectRange={true}
      tileDisabled={tileDisabled}
      minDate={new Date()}
    />
  );
};

export default BookingCalendar;
