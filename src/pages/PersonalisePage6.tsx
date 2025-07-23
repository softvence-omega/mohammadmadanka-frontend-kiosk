import CommonWrapper from '@/common/CommonWrapper';
import Personalise4 from '@/components/Personalise/personalise4';
import BackButton from '@/components/shared/BackButton';
import FirstIconButton from '@/components/shared/FirstIconButton';
import NormalButton from '@/components/shared/NormalButton';
import { Eye, ShoppingCart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PersonalisePage4() {
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


   const handlePreview = () => {
    navigate('/preview', { state: selectedCard });
   }

   const handleAddToCart = () => {
    navigate("/shopping");}

  const handleChangePhoto = () => {
    navigate('/qrcode', { state: selectedCard });
  };

  const handleAddText = () => {
    navigate('/personalize5', { state: selectedCard });
  };


  return (
    <CommonWrapper>
          <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-20">
              {/* Header */}
              <div className="flex items-center justify-between w-full gap-125">
                  {/* Back Button */}
                  <BackButton />


                  <div className='flex items-center gap-4 '>
                  <FirstIconButton
                      onClick={handlePreview}
                      text="Preview"
                      color="#FF5757"
                      bsgColor="#FFFFFF"
                      icon={<Eye size={20}/>}
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
              <h3 className="h-[58px] text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          Personalize your card
        </h3>

        <div className="mt-20">
          <Personalise4 imageSrc="/cards/i3.png" />
          <div className='flex justify-center gap-4  mt-10'>
            <NormalButton text="Change Photo" col="#54CDD1" icon="/icons/img.png" onClick={handleChangePhoto}/>
            <NormalButton text="Edit Text" col="#FF5757" icon="/icons/txt.png" onClick={handleAddText}/>

          </div>

        </div>
      </div>

    </CommonWrapper>
  );

}

