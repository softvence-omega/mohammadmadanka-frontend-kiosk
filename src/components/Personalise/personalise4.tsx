
type Props = {
  imageSrc: string;
};

export default function Personalise4({ imageSrc }: Props) {
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

      {/* Upload Box */}
      <div className="absolute mt-55 ml-26 w-[301.5px] h-[371.5px] border border-[#FF5757] rounded-[4px]">
    
      </div>
    </div>
  );
}