import Logo from '../header/Logo';

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <Logo />
      <span className="mt-3 inline-block text-xs text-textLight">
        © Holidaze - All rights reserved.
      </span>
    </div>
  );
};

export default LogoColumn;
