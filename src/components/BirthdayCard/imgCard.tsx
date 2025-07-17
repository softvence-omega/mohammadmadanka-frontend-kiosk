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
    </div>
  );
}
