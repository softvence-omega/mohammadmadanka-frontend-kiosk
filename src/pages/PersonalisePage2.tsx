import CommonWrapper from '@/common/CommonWrapper';
import Personalise2 from '@/components/Personalise/Personalise2';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';

export default function PersonalisePage2() {
  return (
    <CommonWrapper>
      <div className="mx-auto mt-[80px] ml-[40px] mr-[40px] ">
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
            <NormalButton text="Upload Photo" col="#54CDD1" icon="/icons/img.png" />
            <NormalButton text="Upload Text" col="#FF5757" icon="/icons/txt.png" />

          </div>

        </div>
      </div>

    </CommonWrapper>
  );

}

