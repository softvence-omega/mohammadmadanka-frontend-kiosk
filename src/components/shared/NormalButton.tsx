import React from "react";

interface NormalButtonProps {
  text: string;
  col: string;
  icon?: string; // made optional for shared interface
}

export const NormalButton: React.FC<NormalButtonProps> = ({ text, col, icon }) => {
  return (
    <button
      className="flex items-center justify-center w-[248px] h-[56px] rounded-full px-6 py-4 gap-[12px]"
      style={{ backgroundColor: col }}
    >
      <span className="text-white text-[20px] leading-[120%] font-[400] font-baloo">
        {text}
      </span>
      {icon && (
        <img
          src={icon}
          alt="Icon"
          className="w-[24px] h-[24px]"
        />
      )}
    </button>
  );
};

// Optional: default export one of them
export default NormalButton;
