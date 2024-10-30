import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "./Logo";
import Links from "./Links";
import NavCTAs from "./NavCTAs";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-textDark 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-whiteBg py-3 shadow-xl"
          : "bg-whiteBg py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="hidden lg:flex lg:justify-between lg:w-full">
          <Logo />
          <Links />
          <NavCTAs />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;