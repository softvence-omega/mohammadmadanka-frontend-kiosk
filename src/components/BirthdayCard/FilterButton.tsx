
// const FilterButton = () => {
//   return (
//     <button className="w-[129.14px] h-[41px] px-[10px] flex items-center justify-center border border-[#41A0A3] rounded-[20px]">
//       <span className="text-[#41A0A3] text-[16px] leading-[130%] font-medium font-['Nunito Sans']">
//         For Him
//       </span>
//     </button>
//   );
// };

import NextButton from "./NextButton";

// export default FilterButton;

const filters = ['For Him', 'For Her', 'For Boy', 'For Boy', 'For Boy', 'For Boy', 'For Girl'];


export default function FilterButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter, i) => (
        <button
          key={i}
          className="w-[128px] h-[41px] border border-[#41A0A3] text-[#41A0A3] text-[16px] font-medium font-['Nunito Sans'] px-4 py-2 rounded-full"
        >
          {filter}
        </button>
      ))}
      
    </div>
    
  );
}
