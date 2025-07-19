// components/addToCard/AddCard.tsx
type CardProps = {
  card: {
    image: string;
    title: string;
    description: string;
    size: string;
  };
};

export default function AddCard({ card }: CardProps) {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-[605px] mx-auto p-4">
      {/* Card Image Section */}
      <div className="relative w-full max-w-[512px] h-[725px]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover shadow-[0px_0px_8px_8px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Card Information Section */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h1 className="text-[32px] leading-[120%] text-center capitalize text-[#1E1E1E] font-normal">
          {card.title}
        </h1>
        <p className="text-lg leading-[160%] text-center text-[#4A4A4A] font-normal">
          {card.description}
        </p>
        <p className="text-base leading-[130%] text-center text-[#1E1E1E] font-medium">
          Size: {card.size}
        </p>
      </div>
    </div>
  );
}
