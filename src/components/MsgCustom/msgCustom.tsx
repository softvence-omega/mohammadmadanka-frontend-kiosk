"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/MsgCustom/Card"
import { Textarea } from "@/components/MsgCustom/TextArea"
import { Minus, Plus, AlignLeft, AlignCenter, AlignRight, Globe, X } from "lucide-react"

const stickers = [
  "🎉",
  "🎈",
  "💎",
  "🎊",
  "🎁",
  "💝",
  "🌟",
  "⭐",
  "✨",
  "🎯",
  "🎪",
  "🎭",
  "🎨",
  "🎵",
  "🎶",
  "🎸",
  "🎤",
  "🎧",
  "❤️",
  "💕",
  "💖",
  "💗",
  "💘",
  "💙",
]

const fontColors = [
  "#FEFE07",
  "#FF0A0A",
  "#FF00D0",
  "#1AFEE3",
  "#FF5757",
  "#AAFF0C",
  "#FF5757",
  "#1C1B1F",
  "#1030FF",
  "#5DF55D",
  "#3E80F9",
  "#A8AD25",
  "#9459C8",
  "#781D1D",
  "#438F94",
  "#FEFE07",
  "#FF0A0A",
  "#FF00D0",
  "#1AFEE3",
  "#FF5757",
  "#AAFF0C",
  "#FF5757",
  "#1C1B1F",
  "#1030FF",
  "#5DF55D",
  "#3E80F9",
  "#A8AD25",
  "#9459C8",
  "#781D1D",
  "#438F94",
]

const fonts = [
  { name: "LOBSTER", family: "cursive" },
  { name: "GRAVITAS ONE", family: "serif" },
  { name: "KRISTI", family: "cursive" },
  { name: "DANCING SCRIPT", family: "cursive" },
  { name: "PACIFICO", family: "cursive" },
  { name: "ALLURA", family: "cursive" },
  { name: "ALEO", family: "serif" },
  { name: "SACRAMENTO", family: "cursive" },
  { name: "BRUSH SCRIPT MT", family: "cursive" },
  { name: "SATISFY", family: "cursive" },
]

const keyboardRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "enter"],
  ["z", "x", "c", "v", "b", "n", "m", "!", "?"],
]

export default function MessageCustomizer() {
  const [message, setMessage] = useState("Write your message here")
  const [selectedColor, setSelectedColor] = useState("#FF5757")
  const [fontSize, setFontSize] = useState(16)
  const [selectedFont, setSelectedFont] = useState("Arial")
  const [textAlign, setTextAlign] = useState("center")

  const handleKeyPress = (key: string) => {
    if (key === "enter") {
      setMessage((prev) => prev + "\n")
    } else if (key === "space") {
      setMessage((prev) => prev + " ")
    } else {
      setMessage((prev) => prev + key)
    }
  }

  const handleStickerClick = (sticker: string) => {
    setMessage((prev) => prev + sticker)
  }

  return (
    <div className=" mx-auto border-2 bg-gray-50">
      {/* Header */}
      <div className="text-center ">
        <h3 className=" h-[58px] text-[48px] leading-[120%] text-[#1E1E1E] text-center uppercase tracking-[-0.02em] font-baloo font-normal">
          Add Your Inside Message
        </h3>
      </div>

      {/* Main Content */}
      <div className="flex justify-center mt-18">
        {/* Left Panel */}
        <div className="flex w-[212px] flex-col gap-12">
          {/* Stickers */}
          <Card className="w-52 h-[325px]">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-center mt-4 mb-4 text-gray-800">Stickers</h3>
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-3 gap-4">
                  {stickers.map((sticker, index) => (
                    <button
                      key={index}
                      onClick={() => handleStickerClick(sticker)}
                      className="w-8 h-8 text-2xl hover:scale-110 transition-transform"
                    >
                      {sticker}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Font Colors */}
          <Card className="w-52 h-[358px]">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-center mt-4 mb-4 text-gray-800">Font Colours</h3>
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-3 gap-4">
                  {fontColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${selectedColor === color ? "border-gray-800" : "border-transparent"
                        }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center Panel - Message Area */}
        <div className="ml-8 mr-8 flex flex-col items-center gap-8">
          <Card className="w-[512px] h-[725px] bg-white border border-[#D9D9D9] shadow-[0px_0px_6.1px_5px_rgba(0,0,0,0.3)] rounded-[4px] flex items-center justify-center">
            <CardContent className="p-0 h-full relative">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-full border-0 resize-none  text-center text-2xl p-8"
                style={{
                  color: selectedColor,
                  fontSize: `${fontSize}px`,
                  fontFamily: selectedFont,
                  textAlign: textAlign as any,
                }}
              />
            </CardContent>
          </Card>

          {/* Virtual Keyboard */}

        </div>

        {/* Right Panel */}
        <div className="flex flex-col w-[212px] gap-12">
          {/* Fonts */}
          <Card className="w-53 h-[423px]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Fonts</h3>
              <div className="flex flex-col gap-4.75 items-center">
                {fonts.map((font, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFont(font.family)}
                    className={`text-sm uppercase text-gray-600 hover:text-gray-800 transition-colors ${selectedFont === font.family ? "font-bold" : ""
                      }`}
                    style={{ fontFamily: font.family }}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Font Size */}
          <Card className="w-53 h-[101px]">
            <CardContent >
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Font Size</h3>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setFontSize(Math.max(8, fontSize - 2))}
                  size="sm"
                  className="w-12.5 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-500 border border-gray-300"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="flex-1 w-15 h-10 bg-gray-200 rounded-full  flex items-center justify-center border border-gray-300">
                  <span className="text-lg font-medium text-gray-800">{fontSize}</span>
                </div>
                <Button
                  onClick={() => setFontSize(Math.min(72, fontSize + 2))}
                  size="sm"
                  className="w-12 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-500 border border-gray-300"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Align Text */}
          <Card className="w-52">
            <CardContent>
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Align Text</h3>
              <div className="flex justify-center mb-2 gap-8">
                <Button
                  onClick={() => setTextAlign("left")}
                  size="sm"
                  className={`w-8 h-8 p-0 ${textAlign === "left" ? "bg-gray-500" : "bg-gray-300"} hover:bg-gray-600`}
                >
                  <AlignLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setTextAlign("center")}
                  size="sm"
                  className={`w-8 h-8 p-0 ${textAlign === "center" ? "bg-gray-500" : "bg-gray-300"} hover:bg-gray-600`}
                >
                  <AlignCenter className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setTextAlign("right")}
                  size="sm"
                  className={`w-8 h-8 p-0 ${textAlign === "right" ? "bg-gray-500" : "bg-gray-300"} hover:bg-gray-600`}
                >
                  <AlignRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex mt-10 flex-col gap-4 items-center">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((key, keyIndex) => (
              <Button
                key={keyIndex}
                onClick={() => handleKeyPress(key)}
                className={`w-14 h-14 rounded-full text-white font-medium ${key === "enter" ? "w-28 bg-cyan-400 hover:bg-cyan-500" : "bg-red-300 hover:bg-red-400"
                  }`}
              >
                {key === "enter" ? "enter" : key}
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
          <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

    </div>
  )
}
