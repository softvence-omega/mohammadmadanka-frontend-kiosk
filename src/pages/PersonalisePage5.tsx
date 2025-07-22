import CommonWrapper from '@/common/CommonWrapper';
import Keyboard from '@/components/Personalise/keybord';
import Personalise5 from '@/components/Personalise/personalise5';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalisePage5() {
    const navigate = useNavigate();


   const [cardText, setCardText] = useState("");
   const imageSrc= "cards/i3.png"

  const handleInput = (char: string) => {
    if (char === "⌫") {
      setCardText((prev) => prev.slice(0, -1));
    } else {
      setCardText((prev) => prev + char);
    }
  };
  const handleSave = () => {
    // You may forward image to next page as well
    navigate('/personalize6');
  };



  return (
    <CommonWrapper>
          <div className="mx-auto  ml-[40px] mr-[40px] mb-[154px]">
              {/* Header */}
              <div className="flex items-center justify-between w-full ">
                  {/* Back Button */}
                  <BackButton />
                  <div />
              </div>
              <h3 className="h-[58px] text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
          ADD YOUR TEXT
        </h3>


        <div className="mt-20">
          <Personalise5 imageSrc={imageSrc} text={cardText}  />
        <div className='mt-20'>
        <Keyboard onInput={handleInput}/>
       </div>
          <div className='flex justify-center gap-4  mt-20'>
            <NormalButton text="Save" col="#FF5757" 
            onClick={handleSave}/>

          </div>

        </div>
      </div>
    </CommonWrapper>
  );

}

