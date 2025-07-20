import React from "react";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["SPACE", "BACKSPACE"]
];

interface KeyboardProps {
  onInput: (char: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onInput }) => {
  const handleClick = (key: string) => {
    if (key === "SPACE") onInput(" ");
    else if (key === "BACKSPACE") onInput("⌫");
    else onInput(key);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className="w-12 h-12 rounded bg-gray-200 hover:bg-gray-300 text-sm font-medium"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
