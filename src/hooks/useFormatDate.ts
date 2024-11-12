import { useMemo } from 'react';

const useFormatDate = (dateString: string | undefined) => {
  const formattedDate = useMemo(() => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  }, [dateString]);

  return formattedDate;
};

export default useFormatDate;
