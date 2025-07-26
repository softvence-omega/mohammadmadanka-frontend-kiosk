import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, X } from "lucide-react";

const keyboardRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "enter"],
  ["z", "x", "c", "v", "b", "n", "m", "!", "?"],
];

interface KeyboardProps {
  onInput: (char: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onInput }) => {
  const [message, setMessage] = useState("");

  const handleKeyPress = (key: string) => {
    let updated = "";
    if (key === "enter") {
      updated = message + "\n";
    } else if (key === "space") {
      updated = message + " ";
    } else if (key === "⌫") {
      updated = message.slice(0, -1); // Remove last character    
    }
    else {
      updated = message + key;
    }
    setMessage(updated);
    onInput(key);
  };

  return (
    <div className="flex mt-10 flex-col gap-4 items-center">
      {/* Optional: Display current message */}
      <div className="text-gray-500 mb-4">{message}</div>

      {/* Main Rows */}
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((key, keyIndex) => (
            <Button
              key={keyIndex}
              onClick={() => handleKeyPress(key)}
              className={`w-14 h-14 rounded-full text-white font-medium ${
                key === "enter"
                  ? "w-28 bg-cyan-400 hover:bg-cyan-500"
                  : "bg-red-300 hover:bg-red-400"
              }`}
            >
              {key}
            </Button>
          ))}
        </div>
      ))}

      {/* Bottom Row */}
      <div className="flex gap-2 items-center">
        <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">123</Button>
        <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
          <Globe className="w-5 h-5" />
        </Button>
        <Button
          onClick={() => handleKeyPress(" ")}
          className="w-[549px] h-12 rounded-full bg-red-300 hover:bg-red-400 text-white"
        >
          space
        </Button>
        <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">.?123</Button>
        <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white"
          onClick={() => handleKeyPress("⌫")}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Keyboard;
