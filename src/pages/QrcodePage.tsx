import CommonWrapper from "@/common/CommonWrapper";
import NormalButton from "@/components/shared/NormalButton";
import { useNavigate, useParams } from 'react-router-dom';

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

export default function QrCodePage() {
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

  const handleCancel = () => {
    navigate(`/personalize/${selectedCard.id}/step3`);
  };

  return (
    <CommonWrapper>
      <div className="mx-auto bg-[#00000033] pt-31 pb-80">
        <div className="mt-0 m-48 mb-81 bg-[#EEEEEE] rounded-[16px] shadow-md flex flex-col items-center">
          {/* Title */}
          <div className="mt-20 text-[#1E1E1E] text-[24px] leading-[120%] text-center font-[400] font-baloo max-w-[431px]">
            Scan the QR code using your mobile phone to upload a photo
          </div>

          {/* QR Code */}
          <div
            className="w-[485px] mt-15 h-[485px] bg-cover bg-center rounded-[12px] shadow-[0px_0px_10.5px_4px_rgba(0,0,0,0.13)]"
            style={{ backgroundImage: "url('/icons/qrCode.png')" }}
          />

          {/* Buttons */}
          <div className="flex w-full mt-20 mb-20 justify-center">
            {/* Cancel Button */}
            <NormalButton text="Cancel" col="#FF5757" onClick={handleCancel} />
            {/* Upload Button can be added here */}
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
}
