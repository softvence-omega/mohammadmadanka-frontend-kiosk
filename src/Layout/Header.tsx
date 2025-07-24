import CommonWrapper from "@/common/CommonWrapper";
import NavbarLink from "@/components/shared/NavbarLink";
import { NavItem } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navData: NavItem[] = [
    {
      title: "Card",
      path: "/cards/all", // Show all cards using a generic "all" occasionId
    },
    {
      title: "Gift",
      path: "/", // Adjust this if you have a specific gift page
    },
    {
      title: "Christmas",
      path: "/cards/christmas", // Show only Christmas occasion cards
    },
];
  return (
    <CommonWrapper >
      <nav className="w-full ">
        {/* Middle Section */}
        <div className="bg-[#FF5757] py-8 px-10 h-40 flex items-center justify-between relative">
          {/* Placeholder for left alignment to balance the cart icon */}
          <div 
          className="w-8 h-8" />
          <img
            src="/collection 3.jpg"
            alt="Mantel Worthy Logo"
            className="h-20  mx-auto" // Adjust height as needed, object-contain to preserve aspect ratio
            onClick={() => navigate(`/`)}
          />
          <ShoppingCart 
          onClick={() => navigate(`/shopping`)}
          className="h-8 w-8 text-white" />
        </div>

        {/* Bottom Bar */}
        <NavbarLink navData={navData}></NavbarLink>
      </nav>
    </CommonWrapper>
  );
};

export default Header;
