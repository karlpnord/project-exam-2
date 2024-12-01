interface Props {
  setSearchValue: (value: string) => void;
  searchValue: string;
}

const SearchForm = ({ setSearchValue, searchValue }: Props) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value.toLowerCase());
  };

  return (
    <form className='w-80'>
      <label htmlFor='searchValue' className='hidden'>
        Search venue
      </label>
      <input
        id='searchValue'
        name='searchValue'
        type='text'
        value={searchValue}
        onChange={(e) => onChangeHandler(e)}
        placeholder={'Search for venues...'}
        className='p-2 w-full border border-borderClr rounded-sm focus:outline-none focus:ring focus:ring-primary'
      />
    </form>
  );
};

export default SearchForm;
