
type Props = {
  imageSrc: string;
  text: string;

};

export default function Personalise5({ imageSrc, text }: Props) {
  return (
    <div
      className="relative left-1/2 translate-x-[-50%] w-[286px] h-[406px] bg-cover bg-center bg-no-repeat shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      {/* Red Circle "T" */}
      <div className="absolute w-[22px] h-[22px] mt-[50px] ml-[83px] z-10 rounded-full bg-[#FF5757] text-white text-[14px] font-bold flex items-center justify-center">
        T
      </div>

      {/* Dashed Box for Text*/}
      {/* Dashed Box for Text*/}
      <div className="absolute w-[113px] h-[50px] mt-[59px] ml-[90px] border-[3px] border-dashed border-[#E84F4F] box-border flex items-center justify-center">
        <span className="text-sm text-[#333] text-center break-words px-1">
          {text}
        </span>
      </div>
      {/* Upload Phot Box */}
      <div className="absolute mt-31.5 ml-14.75 w-[168px] h-[202px] border-2 border-dashed border-[#FF5757] rounded-[4px]">
      </div>
    </div>
  );
}