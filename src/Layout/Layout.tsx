
import { Outlet } from "react-router-dom";
import Navbar from "./Header";
import { NavItem } from "@/types";


const Layout: React.FC = () => {
  const navData: NavItem[] = [
    {
      "title": 'Card',
      "id": 1
    },
    {
      "title": 'Gift',
      "id": 2
    },
    {
      "title": 'Christmas',
      "id": 3
    }
  ]
  return (
    <div>
      <Navbar navData={navData} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
