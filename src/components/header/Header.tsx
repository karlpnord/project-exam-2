import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header>
      <DesktopNav />
      <div
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 z-0 bg-whiteBg" />
      </div>
      <div className="h-screen bg-neutral-50" />
    </header>
  );
};

export default Header;