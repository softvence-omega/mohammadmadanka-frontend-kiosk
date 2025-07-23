
import CommonWrapper from "@/common/CommonWrapper";
import Preview from "@/components/Personalise/Preview";
import FirstIconButton from "@/components/shared/FirstIconButton";
import NormalButton from "@/components/shared/NormalButton";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const allCards = [
  {
    id: "c1",
    title: "Birthday Card",
    image: "/cards/i3.png",
    description: "Wishing you a day as fantastic as you are!",
    size: "Standard, 15 X 21 cm",
    price: 49.99,
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



export default function PreviewPage() {
    const navigate = useNavigate();

    const { cardId } = useParams();

  const selectedCard = allCards.find(card => card.id === cardId);

  if (!selectedCard) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Card not found.
      </div>
    );
  }


    const handleAddToCart = () => {
        navigate("/shopping");
    }
    const handleClose = () => {

    navigate(-1); // Go back to the previous page
  
  };


    return (
        <CommonWrapper>
            <div className="mx-auto pt-20 ml-[40px] mr-[40px] mb-[154px]">


                <div className="w-[1000px] h-[1119px] bg-white border-[2px] border-[#1E1E1E] rounded-[32px] box-border">
                    <div className="flex pt-12 pr-12 items-center justify-end">
                        <FirstIconButton
                            onClick={handleAddToCart}
                            text="Add to Cart"
                            color="#FFFFFF"
                            bsgColor="#FF5757"
                            icon={<ShoppingCart size={20} />}
                        />
                    </div>
                    <div className="ml-60 w-[462px] h-[75px]">
                        <div
                            className=" w-full bg-[#dbd9d9] h-full border-1 border-black shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
                            style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%)" }}

                        ></div>
                    </div>
                    <Preview imageSrc={selectedCard.image || "/cards/i3.png"} />
                    <div className="flex justify-center mt-12">
                    <NormalButton text="Close" col="#54CDD1" onClick={handleClose}/>
                    </div>
                </div>
                
                
            </div>

        </CommonWrapper>
    );
}