import CommonWrapper from '@/common/CommonWrapper';
import AddCard from '../components/addToCard/AddCard';
import AddButton from '@/components/addToCard/AddButton';
import BackButton from '@/components/shared/BackButton';

export default function AddToCard() {
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

        <div className="flex flex-col mt-10 items-center gap-20 w-full max-w-[605px] h-[1058px] mx-auto">
          {/* Birthday Card Section  <AddCard />*/}


        {/* Add To Cart Button */}
        <AddButton />
      </div>
      </div>
       

    </CommonWrapper>

  
);

}