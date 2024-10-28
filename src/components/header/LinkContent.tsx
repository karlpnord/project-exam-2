import { FaHouse, FaHouseChimneyMedical, FaHouseChimneyUser } from "react-icons/fa6";

const VenueContent = () => {
  return (
    <div className="w-full bg-foreground rounded-md p-6 shadow-none lg:w-[250px] lg:shadow-md">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="space-y-3 text-textLight font-medium">
          <a href="#" className="flex gap-1 items-center border-b border-borderClr pb-2 hover:text-textDark transition-all">
            <FaHouse />
            All Venues
          </a>
          <a href="#" className="flex gap-1 items-center border-b border-borderClr pb-2 hover:text-textDark transition-all">
            <FaHouseChimneyUser />
            My Venues
          </a>
          <a href="#" className="flex gap-1 items-center border-b border-borderClr pb-2 hover:text-textDark transition-all">
            <FaHouseChimneyMedical />
            Add Venue
          </a>
        </div>
      </div>
    </div>
  );
};

export const LINKS = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Venues",
    href: "#",
    component: VenueContent,
  },
  {
    text: "Profile",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
];