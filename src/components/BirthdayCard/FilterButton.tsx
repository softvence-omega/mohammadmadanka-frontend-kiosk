// components/BirthdayCard/FilterButton.tsx

interface Props {
  selected: string | null;
  setSelected: (filter: string) => void;
}

const filters = ['For Him', 'For Her', 'For Boy', 'For Girl'];

export default function FilterButtons({ selected, setSelected }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {filters.map((filter, i) => (
        <button
          key={i}
          onClick={() => setSelected(filter)}
          className={`w-[128px] h-[41px] border text-[16px] font-medium font-['Nunito Sans'] px-4 py-2 rounded-full
            ${selected === filter
              ? 'bg-[#41A0A3] text-white border-[#41A0A3]'
              : 'text-[#41A0A3] border-[#41A0A3]'}
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
