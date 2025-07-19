// components/BirthdayCard/RudeToggle.tsx

interface Props {
  value: boolean;
  setValue: (val: boolean) => void;
}

export default function RudeToggle({ value, setValue }: Props) {
  return (
    <div className="flex justify-end items-center gap-3">
      <div
        className={`relative w-[72px] h-[30px] rounded-full cursor-pointer shadow-inner ${
          value ? "bg-green-500" : "bg-[#F04436]"
        }`}
        onClick={() => setValue(!value)}
      >
        <div
          className={`absolute top-[3px] w-[23.82px] h-[23.82px] bg-[#FEECEB] rounded-full transition-all duration-300 ${
            value ? "left-[45px]" : "left-[3px]"
          }`}
        />
      </div>
      <span className="text-[16px] font-medium font-['Nunito Sans'] text-[#1E1E1E]">
        Rude Content
      </span>
    </div>
  );
}
