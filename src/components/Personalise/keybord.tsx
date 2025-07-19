"use client"

import type React from "react"

export default function Keyboard() {
  const regularKeyStyle =
    "w-14 h-14 bg-red-200 hover:bg-red-300 transition-colors duration-200 rounded-full flex items-center justify-center text-red-50 font-medium text-lg shadow-sm border-b border-black/10"
  const specialKeyStyle =
    "bg-cyan-400 hover:bg-cyan-500 transition-colors duration-200 rounded-full flex items-center justify-center text-white font-medium shadow-sm border-b border-black/10"

  const Key = ({
    children,
    className = "",
    isSpecial = false,
    width = "w-14",
  }: {
    children: React.ReactNode
    className?: string
    isSpecial?: boolean
    width?: string
  }) => (
    <button className={`${width} h-14 ${isSpecial ? specialKeyStyle : regularKeyStyle} ${className}`}>
      {children}
    </button>
  )

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50 ">
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
        {/* Row 1 - QWERTYUIOP */}
        <div className="flex gap-2">
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
        </div>

        {/* Row 2 - ASDFGHJKL + Return */}
        <div className="flex gap-2">
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
          <Key isSpecial={true} width="w-24">
            Return
          </Key>
        </div>

        {/* Row 3 - ZXCVBNM + punctuation */}
        <div className="flex gap-2">
          {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
          <Key>!</Key>
          <Key>?</Key>
        </div>

        {/* Row 4 - Bottom row with special keys */}
        <div className="flex gap-2 items-center">
          <Key isSpecial={true}>123</Key>
          <Key isSpecial={true}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </Key>
          <Key width="w-80">Space</Key>
          <Key isSpecial={true}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="m9 9 6 6" />
              <path d="m15 9-6 6" />
            </svg>
          </Key>
        </div>
      </div>
    </div>
  )
}
