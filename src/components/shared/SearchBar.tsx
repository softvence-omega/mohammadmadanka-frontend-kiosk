import { Search } from "lucide-react"; 

const SearchBar = () => {
  return (
    <div className="w-[736px] h-[60px] flex items-center px-4 bg-white border border-[#FF5757] rounded-full shadow-[0px_4px_12px_rgba(13,10,44,0.06)]">
      {/* Icon container */}
      <div className="w-[44px] h-[44px] flex items-center justify-center mr-3">
        <Search size={24} strokeWidth={2} className="text-[#5CE1E6]" />
      </div>

      {/* Text Input */}
      <input
        type="text"
        placeholder="Search"
        className="text-[#767676] font-[Poppins] text-[18px] placeholder-[#767676] text-center w-full h-full focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
