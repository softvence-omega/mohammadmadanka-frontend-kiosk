import React from "react";

interface QRCodeBoxProps {
  image: string;
}

const QRCode: React.FC<QRCodeBoxProps> = ({ image }) => {
  return (
    <div
      className="absolute top-[198px] w-[485px] h-[485px] shadow-[0_0_10.5px_4px_rgba(0,0,0,0.13)] rounded-[12px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default QRCode;




// export default function QrCode() {
//   return (
// 
//   );
// }