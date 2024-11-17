export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function calculateBookingCost(
  dateFrom: string,
  dateTo: string,
  price: number
): number {
  const fromDate = new Date(dateFrom);
  const toDate = new Date(dateTo);

  const timeDifference = toDate.getTime() - fromDate.getTime();

  const numberOfNights = timeDifference / (1000 * 3600 * 24);

  const totalCost = numberOfNights * price;

  return totalCost;
}
