// components/BirthdayCard/FilterButton.tsx

import { ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Props {
  selected: string | null;
  setSelected: (filter: string) => void;
}

const filters = [
  'For Him', 'For Her', 'For Boy', 'For Girl',
  'For Him', 'For Her', 'For Boy', 'For Girl',
  'For Him', 'For Her', 'For Boy', 'For Girl'
];

export default function FilterButtons({ selected, setSelected }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-4">
      {/* Scrollable Filter Buttons */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto gap-4 pr-24 scrollbar-hide scrollbar-w-thin "
      >
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setSelected(filter)}
            className={`w-[128px] h-[41px] border whitespace-nowrap text-[16px] font-medium font-['Nunito Sans'] px-4 py-2 rounded-full
              ${selected === filter
                ? 'bg-[#41A0A3] text-white border-[#41A0A3]'
                : 'text-[#41A0A3] border-[#41A0A3]'}
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Arrow Scroll Button */}
      <div
        className="absolute top-1 right-0 w-[48px] h-[48px] flex  z-20 cursor-pointer"
        onClick={scrollRight}
      >
        {/* Blurred Background */}
        <div className="absolute w-full h-full bg-white rounded-full blur-[10px] z-0" />

        {/* Icon Circle */}
        <div className="w-[32px] h-[32px] bg-[#5CE1E6] rounded-full flex items-center justify-center z-10">
          <ChevronRight className="w-[20px] h-[20px] text-white" />
        </div>
      </div>
    </div>
  );
}
