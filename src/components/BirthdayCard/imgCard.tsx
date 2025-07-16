// components/Card.tsx
interface CardProps {
  title: string;
  subtitle: string;
  message: string;
  imageSrc: string;
}

export default function Card({ title, subtitle, message, imageSrc }: CardProps) {
  return (
    <div
      className="w-[312px] h-[442px] shadow-[0_0_6.1px_5px_rgba(0,0,0,0.3)] bg-[#1E1E1E] flex flex-col justify-between items-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* <div className="text-center text-white mt-2">
        <h2 className="text-[24px] font-bold leading-[28px] uppercase">{title}</h2>
        <h3 className="text-[20px] italic">{subtitle}</h3>
      </div>

      <div className="w-[240px] h-[180px] rounded-[8px] border-[6px] border-white overflow-hidden bg-white">
        <img
          src={imageSrc}
          alt={subtitle}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-center text-white text-[16px] font-medium mt-3">
        {message}
      </p> */}
    </div>
  );
}
