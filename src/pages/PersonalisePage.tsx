import CommonWrapper from '@/common/CommonWrapper';
import AddCard from '../components/addToCard/AddCard';
import BackButton from '@/components/shared/BackButton';
import PersonaliseButton from '@/components/Personalise/Persionalise';

export default function PersonalisePage() {
  return (
    <CommonWrapper>
      <div className="mx-auto mt-[80px] ml-[40px] mr-[40px]">
        {/* Header */}
        <div className="flex items-center justify-between w-full ">
          {/* Back Button */}
          <BackButton />
          {/* Title */}
          <span className="w-[61px] h-[24px] text-[20px] leading-[120%] font-normal font-['Baloo'] underline text-[#1E1E1E]">
            $49.99
          </span>
        </div>

        <div className="flex flex-col mt-10 items-center gap-10 w-full max-w-[605px] h-[1058px] mx-auto">

            <AddCard />
            <PersonaliseButton />
      </div>
      </div>
       

    </CommonWrapper>

  
);

}