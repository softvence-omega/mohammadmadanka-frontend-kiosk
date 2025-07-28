// import type React from "react"

// interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// export function Textarea({ className = "", ...props }: TextareaProps) {
//   return (

//     <textarea
//       className={`
//         ${className}`}
//       {...props}
//     />
//   )
// }

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







// import { useRef, useEffect, useState } from "react";

// const CenteredTextarea = ({
//   value,
//   onChange,
//   className = "",
//   selectedColor,
//   selectedFont,
//   fontSize,
//   textAlign,
//   ...props
// }: any) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null);
//   const [paddingTop, setPaddingTop] = useState("0px");

//   useEffect(() => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       const style = getComputedStyle(textarea);
//       const lineHeight = parseFloat(style.lineHeight || "24");
//       const contentHeight = textarea.scrollHeight;
//       const containerHeight = textarea.clientHeight;

//       if (contentHeight <= lineHeight + 4) {
//         setPaddingTop(`${(containerHeight - lineHeight) / 2}px`);
//       } else {
//         setPaddingTop("0px");
//       }
//     }
//   }, [value]);

//   return (
//     <textarea
//       ref={textareaRef}
//       value={value}
//       onChange={onChange}
//       className={`w-117 h-full resize-none text-center text-2xl border-0 outline-none ${className}`}
//       style={{
//         paddingTop,
//         color: selectedColor,
//         fontSize: `${fontSize}px`,
//         fontFamily: selectedFont,
//         textAlign: textAlign as any,
//         overflow: "hidden", // optional: removes scrollbars
//       }}
//       {...props}
//     />
//   );
// };

// export default CenteredTextarea;
