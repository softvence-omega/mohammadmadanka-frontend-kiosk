import NavbarLink from "@/components/shared/NavbarLink";
import { NavItem } from "@/types";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const navData: NavItem[] = [
    {
      title: "Card",
      id: 1,
    },
    {
      title: "Gift",
      id: 2,
    },
    {
      title: "Christmas",
      id: 3,
    },
  ];
  return (
    <nav className="w-full max-w-[1440px] mx-auto">
      {/* Middle Section */}
      <div className="bg-[#FF5757] py-8 flex items-center justify-between relative">
        {/* Placeholder for left alignment to balance the cart icon */}
        <div className="w-8 h-8" />
        <img
          src="/public/collection 3.jpg"
          alt="Mantel Worthy Logo"
          className="h-20  mx-auto" // Adjust height as needed, object-contain to preserve aspect ratio
        />
        <ShoppingCart className="h-8 w-8 text-white" />
      </div>

      {/* Bottom Bar */}
      <NavbarLink navData={navData}></NavbarLink>
    </nav>
  );
};

export default Header;
