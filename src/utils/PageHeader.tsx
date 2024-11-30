const PageHeader = ({ heading }: { heading: string }) => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-textDark'>{heading}</h1>
    </div>
  );
};

export default PageHeader;
