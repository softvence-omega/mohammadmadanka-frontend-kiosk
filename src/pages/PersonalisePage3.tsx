import CommonWrapper from '@/common/CommonWrapper';
import Personalise3 from '@/components/Personalise/Personalise3';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';
import { useLocation, useNavigate } from 'react-router-dom';

export default function      PersonalisePage3() {
  const navigate = useNavigate();
  const location = useLocation();


    const selectedCard = location.state || {
    id: 1,
  title: "Birthday Card",
  image: "/cards/birthday.png",
  description: "Lorem ipsum dolor sit amet consectetur. Magna fusce ipsum sodales turpis dignissim eu ullamcorper.",
  size: "Standard, 15 X 21 cm",
  price: 49.99
  };


  // Get uploaded image from state or fallback to default
  const uploadedImage = location.state?.uploadedImage || "/cards/pic.png";
  const templateImage = location.state?.image || "/cards/birthday.png";

  const handleChange = () => {
    navigate('/qrcode', { state: selectedCard });
  };

  const handleSave = () => {
    // You may forward image to next page as well
    navigate('/personalize4', { state: { uploadedImage } });
  };

  return (
    <CommonWrapper>
      <div className="mx-auto ml-[40px] mr-[40px] justify-items-center ">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <BackButton />
          <div />
        </div>
        <h3 className="h-[58px] text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          ADJUST YOUR PHOTO
        </h3>

        <div className="mt-20">
          <Personalise3 templateSrc={templateImage}  imageSrc={uploadedImage} />
          <div className="flex justify-center mt-10">
            <NormalButton text="Change Photo" col="#FF5757" onClick={handleChange} />
          </div>
        </div>

        <div className="mt-14 border border-amber-50">
          <div className="absolute ml-56 w-[43.03px] h-[43.03px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
            <img
              src="/icons/Trash.png"
              alt="Plus Icon"
              className="w-6 h-6"
            />
          </div>

          {/* Uploaded image */}
          <img
            src={uploadedImage}
            alt="Human"
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
