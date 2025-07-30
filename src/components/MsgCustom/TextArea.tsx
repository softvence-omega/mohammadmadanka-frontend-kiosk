

import React, { useRef, useEffect } from "react";

interface EditableDivProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const EditableDiv: React.FC<EditableDivProps> = ({ value, onChange, className = "", style }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current && divRef.current.innerText !== value) {
      divRef.current.innerText = value;
    }
  }, [value]);

  const handleInput = () => {
    if (divRef.current) {
      onChange(divRef.current.innerText);
    }
  };

  return (
    <div
      ref={divRef}
      contentEditable
      onInput={handleInput}
      className={`max-w-[500px]  h-full  overflow-auto  text-center  text-2xl outline-none resize-none p-8 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        ...style,
      }}
    />
  );
};

