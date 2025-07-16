import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section
      className="relative  h-[230px] px-10 
                 bg-[url('https://i.postimg.cc/8ckbgpvv/Banner-Img.jpg')] bg-cover bg-center bg-no-repeat
                 flex items-center justify-between px-8 py-12 text-white overflow-hidden"
    >
      {/* Content Wrapper */}
      <div className="absolute bottom-8">
        <Button className="bg-[#FF5757] hover:bg-[#E04C4C] text-white rounded-full px-6 py-3 text-[14.37px] font-semibold flex items-center gap-2 shadow-lg">
          Shop Christmas Special
          <div className="bg-white  width-[22.36px] height-[22.36px] rounded-full text-[#FF5757] p-1">
            <ArrowRight />
          </div>
        </Button>
      </div>

      {/* This div is for spacing on the right to balance the button on the left */}
    </section>
  );
};

export default Banner;
