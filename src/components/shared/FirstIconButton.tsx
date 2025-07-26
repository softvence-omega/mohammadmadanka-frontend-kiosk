import React from "react";

type Props = {
   onClick: () => void;

  text: string;
  color?: string; // default: "#FF5757"
  bsgColor?: string; // default: "#FFEEEE"
  icon?: React.ReactNode;
};

export default function FirstIconButton({
  onClick, 
  text,
  color,
  bsgColor,
  icon,
}: Props) {
  return (
    <button
      onClick={onClick}

      className={`flex items-center px-6 py-4 gap-3 w-[186px] h-[56px] justify-center rounded-full border`}
      style={{ borderColor: "#FF5757", backgroundColor: bsgColor  }}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center"
        style={{ color: color || "#FF5757" }}
      >
        {icon}
      </div>
      <span
        className="text-[20px] leading-[120%] font-[400] font-baloo"
        style={{ color: color || "#FF5757" }}
      >
        {text}
      </span>
    </button>
  );
}
