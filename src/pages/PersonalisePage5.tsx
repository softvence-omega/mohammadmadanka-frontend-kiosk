import CommonWrapper from '@/common/CommonWrapper';
import Keyboard from '@/components/Personalise/keybord';
import Personalise5 from '@/components/Personalise/personalise5';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';

export default function PersonalisePage5() {
  return (
    <CommonWrapper>
          <div className="mx-auto mt-[80px] ml-[40px] mr-[40px] mb-[154px]">
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
          <Personalise5 imageSrc="/cards/i3.png" />
        <div className='mt-20'>
        <Keyboard/>
       </div>
          <div className='flex justify-center gap-4  mt-20'>
            <NormalButton text="Save" col="#FF5757" />

          </div>

        </div>




      </div>



    </CommonWrapper>
  );

}

