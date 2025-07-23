import CommonWrapper from "@/common/CommonWrapper";
import ShoppingCard from "@/components/ShoppingCart/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function ShoppingCartPage()
{
      const navigate = useNavigate();

    return(
        <CommonWrapper>
            <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-[154px]">

            <ShoppingCard />
            <ShoppingCard />
            <button 
            onClick={() => navigate("/")}
            className="flex items-center mt-20 mb-22 px-6 py-4 gap-3 w-[221px] h-[56px] border border-[#FF5757] rounded-[49px] mx-auto">
                <span className="text-[20px] leading-[120%] font-[400] font-baloo text-[#FF5757]">
                    Continue Shopping
                </span>
            </button>
            </div>

        </CommonWrapper>
    );

}
