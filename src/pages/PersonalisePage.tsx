import CommonWrapper from '@/common/CommonWrapper';
import AddCard from '../components/addToCard/AddCard';
import BackButton from '@/components/shared/BackButton';
import PersonaliseButton from '@/components/Personalise/Personalise';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PersonalisePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedCard = location.state || {
    id: 1,
  title: "Birthday Card",
  image: "/cards/birthday.png",
  description: "Lorem ipsum dolor sit amet consectetur. Magna fusce ipsum sodales turpis dignissim eu ullamcorper.",
  size: "Standard, 15 X 21 cm",
  price: 49.99
  };

  const handleNext = () => {
    navigate("/personalize2", { state: selectedCard });
  };

  return (
    <CommonWrapper>
      <div className="mx-auto mt-[80px] ml-[40px] mr-[40px]">
        {/* Header */}
        <div className="flex items-center justify-between w-full ">
          {/* Back Button */}
          <BackButton />
          {/* Title */}
          <span className="w-[61px] h-[24px] text-[20px] leading-[120%] font-normal font-['Baloo'] underline text-[#1E1E1E]">
            ${selectedCard.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col mt-10 items-center gap-10 w-full max-w-[605px] h-[1058px] mx-auto">
          <AddCard card={selectedCard} />
          <PersonaliseButton onClick={handleNext} />
        </div>
      </div>
    </CommonWrapper>
  );
}
