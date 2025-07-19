// components/Occasion/OccasionCard.tsx

interface Occasion {
  id: string;
  title: string;
  image: string;
  categoryId: string;
}

interface Props {
  occasions: Occasion[];
  category: { id: string; title: string };
  onClick: (occasion: Occasion) => void;
}

const OccasionCard = ({ occasions, category, onClick }: Props) => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Choose Occasion for {category?.title}
      </h1>
      <div className="w-[1000px] mx-auto flex flex-wrap justify-between gap-y-8">
        {occasions.map((item) => (
          <div
            key={item.id}
            className="relative w-[312px] h-[442px] border border-[#FF5757] rounded-2xl bg-white flex flex-col items-center cursor-pointer"
            onClick={() => onClick(item)}
          >
            <div className="w-[272px] h-[272px] bg-[#EFFCFD] rounded-full mt-8 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[180px] object-contain"
              />
            </div>
            <div className="absolute bottom-10 w-full text-center">
              <p className="text-[32px] font-normal capitalize text-[#1E1E1E] font-[Baloo]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionCard;
