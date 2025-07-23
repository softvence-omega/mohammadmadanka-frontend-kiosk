import { useNavigate, useParams } from 'react-router-dom';
import CommonWrapper from '@/common/CommonWrapper';
import AddCard from '../components/addToCard/AddCard';
import AddButton from '@/components/addToCard/AddButton';
import BackButton from '@/components/shared/BackButton';

// Fake card DB (you can move this to a separate file or fetch from API later)
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

export default function AddToCart() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const card = allCards.find((item) => item.id === cardId);

  if (!card) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Card not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", card);
    alert(`"${card.title}" added to cart!`);
    navigate(`/personalize/${card.id}/step1`);
  };

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-25">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <BackButton />
          <span className="w-[61px] h-[24px] text-[20px] leading-[120%] font-normal font-['Baloo'] underline text-[#1E1E1E]">
            ${card.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col mt-16 items-center w-full max-w-[605px] h-[1058px] mx-auto">
          <AddCard card={card} />
          <AddButton onAddToCart={handleAddToCart} />
        </div>
      </div>
    </CommonWrapper>
  );
}
