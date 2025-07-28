import CommonWrapper from "@/common/CommonWrapper";
import Keyboard from "@/components/Personalise/keybord";
import Personalise5 from "@/components/Personalise/personalise5";
import BackButton from "@/components/shared/BackButton";
import NormalButton from "@/components/shared/NormalButton";
import { useState } from "react";
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

export default function PersonalisePage5() {
  const navigate = useNavigate();
  const { cardId } = useParams();

  const selectedCard = allCards.find((card) => card.id === cardId);

  const [cardText, setCardText] = useState<string>("");

  if (!selectedCard) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Card not found.
      </div>
    );
  }
  // Find card image based on cardId, fallback to default
  const card = allCards.find((c) => c.id === cardId) || allCards[0];
  const imageSrc = card.image;

  const handleInput = (char: string) => {
    if (char === "⌫") {
      setCardText((prev) => prev.slice(0, -1));
    } else {
      setCardText((prev) => prev + char);
    }
  };

  const handleSave = () => {
    // Pass uploadedImage in state when navigating forward
    navigate(`/personalize/${selectedCard.id}/step6`);
  };

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-[154px]">
        {/* Header */}
        <div className="flex items-center justify-between w-full ">
          {/* Back Button */}
          <BackButton />
          <div />
        </div>

        <h3 className="h-[58px] font-baloo text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          ADD YOUR TEXT
        </h3>

        <div className="mt-20">
          <Personalise5 imageSrc={imageSrc} text={cardText} />

          <div className="mt-20">
            <Keyboard onInput={handleInput} />
          </div>

          <div className="flex justify-center gap-4 mt-20">
            <NormalButton text="Save" col="#FF5757" onClick={handleSave} />
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
}
