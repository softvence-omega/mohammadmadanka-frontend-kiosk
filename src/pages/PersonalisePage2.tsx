import CommonWrapper from '@/common/CommonWrapper';
import Personalise2 from '@/components/Personalise/Personalise2';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';
import { useLocation, useNavigate } from 'react-router-dom';



export default function  PersonalisePage2() {
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




  const handleUploadPhoto = () => {
    navigate('/qrcode', { state: selectedCard });
  };

  const handleUpdateText = () => {
    navigate('/personalize5');
  };

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-20">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          {/* Back Button */}
          <BackButton />
          <div />
        </div>
        <h3 className="h-[58px] text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          Personalize your card
        </h3>

        <div className="mt-20">
          <Personalise2 imageSrc="/cards/i3.png" />
          <div className='flex justify-center gap-4  mt-10'>
            <NormalButton
              text="Add Photo"
              col="#54CDD1"
              icon="/icons/img.png"
              onClick={handleUploadPhoto}
            />
            <NormalButton
              text="Add Text"
              col="#FF5757"
              icon="/icons/txt.png"
              onClick={handleUpdateText}
            />
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
}
