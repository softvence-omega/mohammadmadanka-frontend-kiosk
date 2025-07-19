import CommonWrapper from '@/common/CommonWrapper';
import Personalise3 from '@/components/Personalise/Personalise3';
import BackButton from '@/components/shared/BackButton';
import NormalButton from '@/components/shared/NormalButton';

export default function PersonalisePage3() {
    return (
        <CommonWrapper>
            <div className="mx-auto mt-[80px] ml-[40px] mr-[40px] justify-items-center ">
                {/* Header */}
                <div className="flex items-center justify-between w-full">
                    {/* Back Button */}
                    <BackButton />
                    <div />
                </div>
                <h3 className="h-[58px] text-center mt-10 text-[48px] leading-[120%] tracking-[-0.02em] uppercase font-[400] text-[#1E1E1E]">
                    ADJUST YOUR PHOTO
                </h3>

                <div className="mt-20">
                    <Personalise3 imageSrc="/cards/i3.png" />
                    <div className='flex justify-center  mt-10'>
                        <NormalButton text="Change Photo" col="#FF5757" />

                    </div>

                </div>

                <div className='mt-14 border border-amber-50'>

                    <div className="absolute ml-56 w-[43.03px] h-[43.03px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                        <img
                            src="/icons/Trash.png"
                            alt="Plus Icon"
                            className="w-6 h-6"
                        />
                    </div>
                    <img
                        src="/cards/pic.png"
                        alt="Human"
                        className="w-[250px] mt-6 h-[320px] shadow-[0px_8px_15.3px_rgba(0,0,0,0.2)] rounded-[8px]"
                    />
                <div className='flex  mb-7 justify-center  mt-10'>
                    <NormalButton text="Save" col="#5CE1E6" />
                </div>
                </div>
            </div>

        </CommonWrapper>
    );

}

