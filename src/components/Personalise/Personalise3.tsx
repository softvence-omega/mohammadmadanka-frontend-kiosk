import { useRef, useState } from "react";

type Props = {
  imageSrc: string;
  templateSrc: string;
};

export default function Personalise3({ templateSrc,imageSrc }: Props) {
   const [rotation, setRotation] = useState(0); // degrees
  const [scale, setScale] = useState(1);       // zoom factor
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };





  const handleZoom = () => setScale((prev) => prev + 0.1);
  const handleRotate = () => setRotation((prev) => prev + 15);

  return (
    <div
      className="relative left-1/2 translate-x-[-50%] w-[511.76px] h-[725px] bg-cover bg-center bg-no-repeat shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
      style={{ backgroundImage: `url('${templateSrc}')` }}
    >
      {/* Red Circle "T" */}
      <div className="absolute w-[22px] h-[22px] mt-[92px] ml-[148px] rounded-full bg-[#FF5757] text-white text-[14px] font-bold flex items-center justify-center">
        T
      </div>

      {/* Dashed Box */}
      <div className="absolute w-[202px] h-[88px] mt-[104px] ml-[160px] border-[3px] border-dashed border-[#E84F4F] box-border" />
       
      




{/* Dashed Box with Uploaded Image */}
      <div className="absolute w-[300px] h-[375px] mt-54.5 ml-26.5 flex items-center justify-center border-2 border-dashed border-[#FF5757] rounded-[4px] overflow-hidden">
        <img
          src={imageSrc}
          alt="Uploaded"
                    style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`
          
          }}
          className="object-contain max-w-full max-h-full rounded-[4px]"
        />

        {/* Plus Icon Circle */}
        <div onMouseDown={handleMouseDown} className="absolute w-[76.03px] h-[76.03px] flex items-center justify-center">
          <img
            src="/icons/+icon.png"
            alt="Plus Icon"
            className="w-13 h-13"
          />
        </div>
      </div>

      {/* Rotate Icon */}
      <div
        onClick={handleRotate}
        className="absolute mt-51 ml-23 w-[32px] h-[32px] bg-[#FF5757] rounded-full flex items-center justify-center cursor-pointer"
      >
        <img
          src="/icons/ArrowsClockwise.png"
          alt="Rotate"
          className="w-6 h-6"
        />
      </div>

      {/* Zoom Icon */}
      <div
        onClick={handleZoom}
        className="absolute mt-143 ml-97 w-[32px] h-[32px] bg-[#FF5757] rounded-full flex items-center justify-center cursor-pointer"
      >
        <img
          src="/icons/Arrows.png"
          alt="Zoom"
          className="w-6 h-6"
        />
      </div>



    </div>
  );
}