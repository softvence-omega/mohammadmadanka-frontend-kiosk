import { NavItem } from "@/types"
import { ShoppingCart } from "lucide-react"
import { NavLink } from "react-router-dom"



const Header  = ({navData}:{navData:NavItem[]}) => {

  return (
    <nav className="w-full max-w-[1440px] mx-auto">

      {/* Middle Section */}
      <div className="bg-[#FF5757] py-8 px-4 flex items-center justify-between relative">
        {/* Placeholder for left alignment to balance the cart icon */}
        <div className="w-8 h-8" />
        <h1 className="text-white text-5xl font-extrabold tracking-wider text-center flex-grow">MANTEL WORTHY</h1>
        <ShoppingCart className="h-8 w-8 text-white" />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#54CDD1] py-4 flex justify-center gap-8">
        {
          navData.map((item)=> <NavLink to="#" className="text-white font-medium text-lg">
          {" "}
          
          {item.title}
        </NavLink>)
        }
       
    
      </div>
    </nav>
  )
}

export default Header 
