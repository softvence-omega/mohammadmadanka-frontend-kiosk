import { ChevronLeft } from "lucide-react"; 

const BackButton = () => {
  return (
    <button className="flex items-center gap-1 px-4 py-2 w-[113px] h-[45px] bg-[#FF5757] rounded-full">
      {/* Chevron Icon */}
      <div className="w-6 h-6 flex items-center justify-center  rounded-full relative">
        <ChevronLeft size={24} className="text-[#FFEEEE]" />
      </div>

      {/* Text */}
      <span className="text-[24px] font-[Baloo] text-[#FFEEEE] leading-[29px]">
        Back
      </span>
    </button>
  );
};

export default BackButton;
