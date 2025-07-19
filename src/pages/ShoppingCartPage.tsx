import CommonWrapper from "@/common/CommonWrapper";
import ShoppingCard from "@/components/ShoppingCart/ShoppingCart";

export default function ShoppingCartPage()
{
    return(
        <CommonWrapper>
            <ShoppingCard />
            <ShoppingCard />
            <button className="flex items-center mt-20 mb-22 px-6 py-4 gap-3 w-[221px] h-[56px] border border-[#FF5757] rounded-[49px] mx-auto">
                <span className="text-[20px] leading-[120%] font-[400] font-baloo text-[#FF5757]">
                    Continue Shopping
                </span>
            </button>

        </CommonWrapper>
    );

}
