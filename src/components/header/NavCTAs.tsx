const NavCTAs = () => {
  return (
    <div className="flex items-center gap-3 font-inter">
      <button className='bg-whiteBg text-secondary px-6 py-2 rounded-md hover:bg-defaultBg transition'>Sign up</button>
      <button className='bg-secondary text-secondaryContent px-6 py-2 rounded-md hover:bg-secondaryDark transition'>Sign in</button>
    </div>
  );
};

export default NavCTAs;