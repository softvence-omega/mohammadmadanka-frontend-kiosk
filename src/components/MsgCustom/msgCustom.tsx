import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/MsgCustom/Card";
import React, { useEffect, useRef, useState } from "react";
import {
  Stage,
  Layer,
  Text,
  Image as KonvaImage,
  Transformer,
  Rect,
} from "react-konva";
import useImage from "use-image";

type Sticker = {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

import {
  Minus,
  Plus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Globe,
  X,
} from "lucide-react";
import Konva from "konva";

const stickersOption = [
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
];

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
];

const fonts = [
  { name: "LOBSTER", family: "Lobster, cursive" },
  { name: "GRAVITAS ONE", family: "Gravitas One, serif" },
  { name: "KRISTI", family: "Kristi, cursive" },
  { name: "DANCING SCRIPT", family: "Dancing Script, cursive" },
  { name: "PACIFICO", family: "Pacifico, cursive" },
  { name: "ALLURA", family: "Allura, cursive" },
  { name: "ALEO", family: "Aleo, serif" },
  { name: "SACRAMENTO", family: "Sacramento, cursive" },
  { name: "BRUSH SCRIPT MT", family: "Brush Script MT, cursive" },
  { name: "SATISFY", family: "Satisfy, cursive" },
];

const lowercaseKeyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "enter"],
  ["z", "x", "c", "v", "b", "n", "m", "!", "?"],
];
const uppercaseKeyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "enter"],
  ["Z", "X", "C", "V", "B", "N", "M", "!", "?"],
];

export default function MessageCustomizer() {
  const [message, setMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState("#FF5757");
  const [fontSize, setFontSize] = useState(50);
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [textAlign, setTextAlign] = useState("center");
  const stageRef = useRef<Konva.Stage>(null);
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCaps, setIsCaps] = useState(false);
  const keyboardRows = isCaps ? uppercaseKeyboard : lowercaseKeyboard;

  const textRef = useRef<any>(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const height = textRef.current.height();
      setTextHeight(height);
    }
  });

  const handleKeyPress = (key: string) => {
    if (key === "enter") {
      setMessage((prev) => prev + "\n");
    } else if (key === "space") {
      setMessage((prev) => prev + " ");
    } else if (key === "back") {
      setMessage((prev) => prev.slice(0, -1));
    } else if (key === "cap") {
      setIsCaps((prev) => !prev);
    } else if (key === ".?123") {
      // Handle switching to special characters keyboard if needed
    } else if (key === "globe") {
      // Handle switching to different keyboard layout if needed
    } else {
      setMessage((prev) => prev + key);
    }
  };

  const handleExport = () => {
    if (!stageRef.current) return;
    const uri = stageRef.current.toDataURL({ pixelRatio: 4 });
    const link = document.createElement("a");
    link.download = "message.png";
    link.href = uri;
    link.click();
  };

  const addSticker = (src: string) => {
    const id = Date.now().toString();
    setStickers((prev) => [
      ...prev,
      { id, src, x: 100, y: 100, width: 50, height: 50 },
    ]);
  };

  const Sticker = ({ sticker }: { sticker: any }) => {
    const shapeRef = useRef(null);
    const trRef = useRef(null);
    const [image] = useImage(sticker.src);

    React.useEffect(() => {
      if (selectedId === sticker.id && trRef.current) {
        (trRef.current as any).nodes([shapeRef.current]);
        (trRef.current as any).getLayer().batchDraw();
      }
    }, [selectedId]);

    return (
      <>
        <KonvaImage
          image={image}
          ref={shapeRef}
          {...sticker}
          draggable
          onClick={() => setSelectedId(sticker.id)}
          onTap={() => setSelectedId(sticker.id)}
          onDragEnd={(e) => {
            const newStickers = stickers.map((s) =>
              s.id === sticker.id
                ? { ...s, x: e.target.x(), y: e.target.y() }
                : s
            );
            setStickers(newStickers);
          }}
          onTransformEnd={(e) => {
            const node = shapeRef.current as any;
            const newStickers = stickers.map((s) =>
              s.id === sticker.id
                ? {
                    ...s,
                    x: node.x(),
                    y: node.y(),
                    width: node.width() * node.scaleX(),
                    height: node.height() * node.scaleY(),
                    scaleX: 1,
                    scaleY: 1,
                  }
                : s
            );
            setStickers(newStickers);
          }}
        />
        {selectedId === sticker.id && <Transformer ref={trRef} />}
      </>
    );
  };

  return (
    <div className=" mx-auto bg-gray-50">
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
              <h3 className="text-2xl font-semibold text-center mt-4 mb-4 text-gray-800">
                Stickers
              </h3>
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-3 gap-4">
                  {stickersOption.map((stickerOption, index) => (
                    <button
                      key={index}
                      onClick={() => addSticker(stickerOption)}
                      className="w-8 h-8 text-2xl hover:scale-110 transition-transform"
                    >
                      {stickerOption}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Font Colors */}
          <Card className="w-52 h-[358px]">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-center mt-4 mb-4 text-gray-800">
                Font Colours
              </h3>
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-3 gap-4">
                  {fontColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                        selectedColor === color
                          ? "border-gray-800"
                          : "border-transparent"
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
          <Stage
            width={512}
            height={725}
            ref={stageRef}
            className="bg-white border border-[#D9D9D9] shadow-[0px_0px_6.1px_5px_rgba(0,0,0,0.3)] rounded-[4px]"
            onMouseDown={(e) => {
              if (e.target === e.target.getStage()) {
                setSelectedId(null);
              }
            }}
          >
            <Layer>
              {/* Message Text */}
              <Rect
                x={0}
                y={0}
                width={512}
                height={725}
                fill="white"
                onMouseDown={() => {
                  setSelectedId(null);
                }}
              />

              <Text
                ref={textRef}
                text={message}
                fontSize={fontSize}
                fontFamily={selectedFont}
                fill={selectedColor}
                align={textAlign as any}
                x={30}
                y={350 - textHeight / 2}
                width={460}
                wrap="word"
                verticalAlign="middle"
              />

              {/* Stickers */}
              {stickers.map((sticker) => (
                <Sticker key={sticker.id} sticker={sticker} />
              ))}
            </Layer>
          </Stage>

          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => addSticker("/panda.png")}
            >
              Add Heart Sticker
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={handleExport}
            >
              Export as PNG
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col w-[212px] gap-12">
          {/* Fonts */}
          <Card className="w-53 h-[423px]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                Fonts
              </h3>
              <div className="flex flex-col gap-4.75 items-center">
                {fonts.map((font, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFont(font.family)}
                    className={`text-sm uppercase text-gray-600 hover:text-gray-800 transition-colors ${
                      selectedFont === font.family ? "font-bold" : ""
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
            <CardContent>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                Font Size
              </h3>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setFontSize(Math.max(8, fontSize - 2))}
                  size="sm"
                  className="w-12.5 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-500 border border-gray-300"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="flex-1 w-15 h-10 bg-gray-200 rounded-full  flex items-center justify-center border border-gray-300">
                  <span className="text-lg font-medium text-gray-800">
                    {fontSize}
                  </span>
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
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                Align Text
              </h3>
              <div className="flex justify-center mb-2 gap-8">
                <Button
                  onClick={() => setTextAlign("left")}
                  size="sm"
                  className={`w-8 h-8 p-0 ${
                    textAlign === "left" ? "bg-gray-500" : "bg-gray-300"
                  } hover:bg-gray-600`}
                >
                  <AlignLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setTextAlign("center")}
                  size="sm"
                  className={`w-8 h-8 p-0 ${
                    textAlign === "center" ? "bg-gray-500" : "bg-gray-300"
                  } hover:bg-gray-600`}
                >
                  <AlignCenter className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setTextAlign("right")}
                  size="sm"
                  className={`w-8 h-8 p-0 ${
                    textAlign === "right" ? "bg-gray-500" : "bg-gray-300"
                  } hover:bg-gray-600`}
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
                className={`w-14 h-14 rounded-full text-white font-medium ${
                  key === "enter"
                    ? "w-28 bg-cyan-400 hover:bg-cyan-500"
                    : "bg-red-300 hover:bg-red-400"
                }`}
              >
                {key === "enter" ? "enter" : key}
              </Button>
            ))}
          </div>
        ))}

        {/* Bottom Row */}
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => handleKeyPress("cap")}
            className={`w-14 h-14 rounded-full text-white 
    ${
      isCaps ? "bg-cyan-400 hover:bg-cyan-500" : "bg-red-300 hover:bg-red-400"
    }`}
          >
            CAP
          </Button>
          <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
            <Globe className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => handleKeyPress(" ")}
            className="w-[549px] h-12 rounded-full bg-red-300 hover:bg-red-400 text-white"
          >
            space
          </Button>
          <Button className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
            .?123
          </Button>
          <Button
            onClick={() => handleKeyPress("back")}
            className="w-14 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
