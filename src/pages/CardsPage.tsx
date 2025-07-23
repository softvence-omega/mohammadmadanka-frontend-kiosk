import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CommonWrapper from '@/common/CommonWrapper';
import BackButton from '@/components/shared/BackButton';
import SearchBar from '@/components/shared/SearchBar';
import FilterButtons from '@/components/BirthdayCard/FilterButton';
import RudeToggle from '@/components/BirthdayCard/RudeToggle';
import Card from '@/components/BirthdayCard/imgCard';

const allCards = [
  {
    id: "c1",
    title: "Happy Birthday",
    subtitle: "Jhon",
    message: "Wishing you a day as fantastic as you are!",
    imageSrc: "/cards/i3.png",
    categoryId: "cards",
    occasionId: "birthday",
    filter: "For Him",
    rude: false,
  },
  {
    id: "c2",
    title: "Happy Birthday",
    subtitle: "Mom",
    message: "You're the best! Enjoy your special day.",
    imageSrc: "/cards/i2.png",
    categoryId: "cards",
    occasionId: "birthday",
    filter: "For Her",
    rude: false,
  },
  {
    id: "c3",
    title: "You're getting old",
    subtitle: "Old Buddy",
    message: "But not wiser 😏",
    imageSrc: "/cards/i1.png",
    categoryId: "cards",
    occasionId: "birthday",
    filter: "For Him",
    rude: true,
  },
];

export default function CardPage() {
  const { occasionId } = useParams();
  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showRude, setShowRude] = useState(false);

  if (!occasionId) {
    return (
      <div className="text-center mt-20 text-xl text-red-600">
        Missing occasion ID
      </div>
    );
  }

  // Find occasion from fake data
  const occasion = {
    id: occasionId,
    title: occasionId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };

  const filteredCards = allCards.filter((card) => {
    const matchOccasion = card.occasionId === occasionId;
    const matchFilter = selectedFilter ? card.filter === selectedFilter : true;
    const matchRude = showRude ? true : !card.rude;
    return matchOccasion && matchFilter && matchRude;
  });

  const handleCardClick = (card: typeof allCards[0]) => {
    navigate(`/add/${card.id}`);
  };

  return (
    <CommonWrapper className="relative">
      <div className="mx-auto pt-[75px] ml-[40px] mr-[40px] mb-[40px]">
        <div className="flex items-center justify-between w-[663px]">
          <BackButton />
          <h1 className="text-[40px] font-baloo text-[#1E1E1E] capitalize">
            {occasion.title} Cards
          </h1>
        </div>

        <div className='flex justify-center mt-18'>
          <SearchBar />
        </div>

        <div className="flex flex-col mt-15">
          <FilterButtons selected={selectedFilter} setSelected={setSelectedFilter} />
        </div>

        <div className='mt-10'>
          <RudeToggle value={showRude} setValue={setShowRude} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-5">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div onClick={() => handleCardClick(card)} key={index}>
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  message={card.message}
                  imageSrc={card.imageSrc}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No cards found for the selected filters.
            </div>
          )}
        </div>
      </div>
    </CommonWrapper>
  );
}
