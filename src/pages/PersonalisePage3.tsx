import CommonWrapper from '@/common/CommonWrapper';
import Personalise3 from '@/components/Personalise/Personalise3';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';
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

export default function PersonalisePage3() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedCard = allCards.find(card => card.id === cardId);

  if (!selectedCard) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Card not found.
      </div>
    );
  }

  // uploadedImage passed through navigation state from previous page (e.g. QR code upload)
  const uploadedImage = location.state?.uploadedImage || "/cards/pic.png";
  const templateImage = selectedCard.image;

  const handleChange = () => {
    navigate(`/personalize/${selectedCard.id}/photo`);
  };

  const handleSave = () => {
    // Pass uploadedImage in state when navigating forward
    navigate(`/personalize/${selectedCard.id}/step4`, { state: { uploadedImage } });
  };

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] justify-items-center ">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <BackButton />
          <div />
        </div>
        <h3 className="h-[58px] text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          ADJUST YOUR PHOTO
        </h3>

        <div className="mt-20">
          <Personalise3 templateSrc={templateImage} imageSrc={uploadedImage} />
          <div className="flex justify-center mt-10">
            <NormalButton text="Change Photo" col="#FF5757" onClick={handleChange} />
          </div>
        </div>

        <div className="mt-14 border border-amber-50 relative">
          <div className="absolute ml-56 w-[43.03px] h-[43.03px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
            <img
              src="/icons/Trash.png"
              alt="Trash Icon"
              className="w-6 h-6"
            />
          </div>

          {/* Uploaded image */}
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="w-[250px] mt-6 h-[320px] shadow-[0px_8px_15.3px_rgba(0,0,0,0.2)] rounded-[8px]"
          />
          <div className="flex mb-7 justify-center mt-10">
            <NormalButton text="Save" col="#5CE1E6" onClick={handleSave} />
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
}
