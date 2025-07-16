// components/RudeToggle.tsx
export default function RudeToggle() {
  return (
    <div className="flex justify-end items-center gap-3">
      <div className="relative w-[72px] h-[30px] bg-[#F04436] rounded-full shadow-inner">
        <div className="absolute left-[3px] top-[3px] w-[23.82px] h-[23.82px] bg-[#FEECEB] rounded-full shadow-[inset_1.14px_1.14px_3.8px_rgba(255,255,255,0.8)]" />
      </div>
      <span className="text-[16px] font-medium font-['Nunito Sans'] text-[#1E1E1E]">
        Rude Content
      </span>
    </div>
  );
}
