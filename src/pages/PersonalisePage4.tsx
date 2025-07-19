import CommonWrapper from '@/common/CommonWrapper';
import Personalise4 from '@/components/Personalise/personalise4';
import BackButton from '@/components/shared/BackButton';
import FirstIconButton from '@/components/shared/FirstIconButton';
import NormalButton from '@/components/shared/NormalButton';
import { Eye, ShoppingCart } from 'lucide-react';

export default function PersonalisePage4() {
  return (
    <CommonWrapper>
          <div className="mx-auto mt-[80px] ml-[40px] mr-[40px] ">
              {/* Header */}
              <div className="flex items-center justify-between w-full gap-125">
                  {/* Back Button */}
                  <BackButton />


                  <div className='flex items-center gap-4 '>
                                      <FirstIconButton
                      text="Preview"
                      color="#FF5757"
                      bsgColor="#FFFFFF"
                      icon={<Eye size={20}/>}
                  />
                  <FirstIconButton
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
            <NormalButton text="Change Photo" col="#54CDD1" icon="/icons/img.png" />
            <NormalButton text="Add Text" col="#FF5757" icon="/icons/txt.png" />

          </div>

        </div>
      </div>

    </CommonWrapper>
  );

}

