import { NavItem } from "@/types";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ navData }: { navData: NavItem[] }) => {
  return (
    <div className="bg-[#54CDD1] py-4 flex justify-center gap-8 font-[Baloo]">
      {navData?.map((item) => (
        <NavLink to={item.path} className="text-white font-medium text-xl" >
          {" "}
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarLink;
