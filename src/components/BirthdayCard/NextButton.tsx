import { ChevronRight } from "lucide-react";

const NextButton = () => {
  return (
    <div className="absolute w-[93px] mt-3 right-0  h-[46px] justify-end ">
      {/* Blurred background */}
      <div className="absolute   w-full h-full bg-white rounded-[12px] blur-[14.85px]" />

      {/* Cyan circle with icon */}
      <div className="absolute ml-13  top-[7px] w-[32px] h-[32px] bg-[#5CE1E6] rounded-full flex items-center justify-center z-10">
        <ChevronRight className="w-[20px] h-[20px] text-[#EFFCFD]" />
      </div>
    </div>
  );
};

export default NextButton;
