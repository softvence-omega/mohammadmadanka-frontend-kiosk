import CommonWrapper from '@/common/CommonWrapper';
import Personalise4 from '@/components/Personalise/personalise4';
import BackButton from '@/components/shared/BackButton';
import FirstIconButton from '@/components/shared/FirstIconButton';
import NormalButton from '@/components/shared/NormalButton';
import { Eye, ShoppingCart } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

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

export default function PersonalisePage4() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const selectedCard = allCards.find(card => card.id === cardId);

  if (!selectedCard) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Card not found.
      </div>
    );
  }

  // You can still pass extra state like uploaded images via location.state if needed
  // For example:
  // const uploadedImage = location.state?.uploadedImage;

  const handlePreview = () => {
    navigate(`/preview/${selectedCard.id}`, { state: { card: selectedCard } });
  };

  const handleAddToCart = () => {
    navigate(`/shopping`, { state: { card: selectedCard } });
  };

  const handleChangePhoto = () => {
    navigate(`/personalize/${selectedCard.id}/photo`);
  };

  const handleAddText = () => {
    navigate(`/personalize/${selectedCard.id}/text`);
  };

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-20">
        {/* Header */}
        <div className="flex items-center justify-between w-full gap-125">
          {/* Back Button */}
          <BackButton />

          <div className="flex items-center gap-4">
            <FirstIconButton
              onClick={handlePreview}
              text="Preview"
              color="#FF5757"
              bsgColor="#FFFFFF"
              icon={<Eye size={20} />}
            />
            <FirstIconButton
              onClick={handleAddToCart}
              text="Add to Cart"
              color="#FFFFFF"
              bsgColor="#FF5757"
              icon={<ShoppingCart size={20} />}
            />
          </div>

          <div />
        </div>
        <h3 className="h-[58px] text-center mt-10 text-[48px] font-baloo leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          Personalize your card
        </h3>

        <div className="mt-20">
          <Personalise4 imageSrc={selectedCard.image} />
          <div className="flex justify-center gap-4 mt-10">
            <NormalButton
              text="Change Photo"
              col="#54CDD1"
              icon="/icons/img.png"
              onClick={handleChangePhoto}
            />
            <NormalButton
              text="Add Text"
              col="#FF5757"
              icon="/icons/txt.png"
              onClick={handleAddText}
            />
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
}
