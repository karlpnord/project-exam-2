import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import Loader from '../../utils/Loader';
import { useInfiniteVenues } from '../../hooks/useInfiniteVenues';
import { useState } from 'react';
import SearchForm from '../../components/forms/SearchForm';
import VenueList from '../../components/all-venues/VenueList';
import { useObserverInfiniteScrolling } from '../../hooks/useObserverInfiniteScrolling';
import { useSearchFilteredVenues } from '../../hooks/useSearchFilteredVenues';

const AllVenues = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const {
    data,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteVenues();

  const lastVenueElementRef = useObserverInfiniteScrolling(
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  );

  const filteredVenues = useSearchFilteredVenues(data, searchValue);

  return (
    <main className="flex-1">
      <div className="bg-whiteBg font-inter">
        <MaxWidthWrapper className="relative z-20 pb-12 pt-24 md:pb-36 md:pt-36">
          <div className="px-2 mb-10 flex flex-col sm:flex-row sm:items-center justify-between">
            <h1 className="text-4xl mb-2 font-bold text-textDark">
              All Venues
            </h1>
            <SearchForm
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          </div>
          {isLoading && <Loader />}
          {isSuccess && (
            <VenueList
              venues={filteredVenues}
              lastVenueElementRef={lastVenueElementRef}
            />
          )}
          {isFetchingNextPage && <Loader className="mt-20" />}
        </MaxWidthWrapper>
      </div>
    </main>
  );
};

export default AllVenues;
