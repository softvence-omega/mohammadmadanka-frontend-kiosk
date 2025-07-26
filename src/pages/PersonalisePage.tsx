import { useNavigate, useParams } from 'react-router-dom';
import CommonWrapper from '@/common/CommonWrapper';
import AddCard from '../components/addToCard/AddCard';
import BackButton from '@/components/shared/BackButton';
import PersonaliseButton from '@/components/Personalise/Personalise';

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

export default function PersonalisePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const selectedCard = allCards.find((card) => card.id === cardId);

  if (!selectedCard) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Card not found.
      </div>
    );
  }

  const handleNext = () => {
    navigate(`/personalize/${selectedCard.id}/step2`);
  };

  return (
    <CommonWrapper>
  <div className="pt-20 ml-4 mr-4 sm:ml-[40px] sm:mr-[40px] mx-auto">
    
    {/* Header */}
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0 w-full">
      <BackButton />
      <span className="text-base sm:text-[20px] w-auto sm:w-[61px] h-auto sm:h-[24px] leading-[120%] font-normal font-['Baloo'] underline text-[#1E1E1E]">
        ${selectedCard.price.toFixed(2)}
      </span>
    </div>

    {/* Card Preview + Button */}
    <div className="flex flex-col mt-10 items-center gap-10 w-full max-w-[605px] h-auto sm:h-[1058px] mx-auto px-2">
      <AddCard card={selectedCard} />
      <PersonaliseButton onClick={handleNext} />
    </div>
  </div>
</CommonWrapper>
  );
}
