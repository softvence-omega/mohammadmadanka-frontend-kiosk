import CommonWrapper from "@/common/CommonWrapper";
import ShoppingCard from "@/components/ShoppingCart/ShoppingCart";
import { useNavigate } from "react-router-dom";

const AddedToCart = [
  {
    id: "c1",
    title: "Birthday Card",
    image: "/cards/i3.png",
    description: "Wishing you a day as fantastic as you are!",
    size: "Standard, 15 X 21 cm",
    price: 49.99,
    message: "Happy Birthday!",
  },
  {
    id: "c2",
    title: "Mom's Card",
    image: "/cards/i2.png",
    description: "You're the best! Enjoy your special day.",
    size: "Standard, 15 X 21 cm",
    price: 59.99,
  },
  {
    id: "c3",
    title: "Funny Old Friend Card",
    image: "/cards/i1.png",
    description: "But not wiser 😏",
    size: "Standard, 15 X 21 cm",
    price: 39.99,
  },
];

export default function ShoppingCartPage() {
  const navigate = useNavigate();

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-[154px]">
        {AddedToCart.length > 0 ? (
          AddedToCart.map((card) => (
            <ShoppingCard key={card.id} card={card} />
          ))
        ) : (
          <div className="text-center mt-20 text-xl text-red-600">
            No cards in cart.
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="flex items-center mt-20 px-5 py-4 gap-3 w-[221px] h-[56px] border border-[#FF5757] rounded-[49px] mx-auto"
        >
          <span className="text-[20px] leading-[120%] font-[400] font-baloo text-[#FF5757]">
            Continue Shopping
          </span>
        </button>
      </div>
    </CommonWrapper>
  );
}
