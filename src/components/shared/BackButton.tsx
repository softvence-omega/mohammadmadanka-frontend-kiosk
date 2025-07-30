import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-1 px-4 py-2 w-[115px] h-[45px] bg-[#FF5757] rounded-full hover:bg-[#FF3B3B] transition-colors duration-300"
    >
      {/* Chevron Icon */}
      <div className="w-6 h-6 flex items-center justify-center rounded-full relative">
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
