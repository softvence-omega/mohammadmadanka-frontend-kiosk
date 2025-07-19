
type Props = {
  imageSrc: string;
};

export default function Personalise2({ imageSrc }: Props) {
  return (
    <div
      className="relative left-1/2 translate-x-[-50%] w-[511.76px] h-[725px] bg-cover bg-center bg-no-repeat shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      {/* Red Circle "T" */}
      <div className="absolute w-[22px] h-[22px] mt-[92px] ml-[148px] rounded-full bg-[#FF5757] text-white text-[14px] font-bold flex items-center justify-center">
        T
      </div>

      {/* Dashed Box */}
      <div className="absolute w-[202px] h-[88px] mt-[104px] ml-[160px] border-[3px] border-dashed border-[#E84F4F] box-border" />
       
       <div className="absolute mt-51  ml-23 w-[32px] h-[32px] bg-[#FF5757] rounded-full flex items-center justify-center">
          <img
            src="/icons/ArrowsClockwise.png"
            alt="Plus Icon"
            className="w-6 h-6"
          />
        </div>
            <div className="absolute mt-143  ml-97 w-[32px] h-[32px] bg-[#FF5757] rounded-full flex items-center justify-center">
          <img
            src="/icons/Arrows.png"
            alt="Plus Icon"
            className="w-6 h-6"
          />
        </div>






      <div className="absolute w-[289px] h-[358px] mt-56.5 ml-28 items-center border-2 border-dashed border-[#FF5757] rounded-[4px]">
        {/* Plus Icon Circle */}
        <div className="absolute mt-37  ml-28 w-[76.03px] h-[76.03px] flex items-center justify-center">
          <img
            src="/icons/+icon.png"
            alt="Plus Icon"
            className="w-13 h-13"
          />
        </div>
      </div>



    </div>
  );
}