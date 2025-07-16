
import CommonWrapper from '@/common/CommonWrapper';
import BackButton from '@/components/shared/BackButton';
import SearchBar from '@/components/shared/SearchBar';
import FilterButtons from '@/components/BirthdayCard/FilterButton';
import RudeToggle from '@/components/BirthdayCard/RudeToggle';
import Card from '@/components/BirthdayCard/imgCard';
import NextButton from '@/components/BirthdayCard/NextButton';

const dummyCards = [
  {
    title: "Happy Birthday",
    subtitle: "Jhon",
    message: "Wishing you a day as fantastic as you are!",
    imageSrc: "/cards/i3.png", // place in /public/cards/
  },
  {
    title: "Happy Birthday",
    subtitle: "Mom",
    message: "You're the best! Enjoy your special day.",
    imageSrc: "/cards/i2.png",
  },
  {
    title: "Happy Birthday",
    subtitle: "Buddy",
    message: "Let’s party like it’s your day—because it is!",
    imageSrc: "/cards/i1.png",
  },
    {
    title: "Happy Birthday",
    subtitle: "Jhon",
    message: "Wishing you a day as fantastic as you are!",
    imageSrc: "/cards/i3.png", // place in /public/cards/
  },
  {
    title: "Happy Birthday",
    subtitle: "Mom",
    message: "You're the best! Enjoy your special day.",
    imageSrc: "/cards/i2.png",
  },
  {
    title: "Happy Birthday",
    subtitle: "Buddy",
    message: "Let’s party like it’s your day—because it is!",
    imageSrc: "/cards/i1.png",
  },
    {
    title: "Happy Birthday",
    subtitle: "Jhon",
    message: "Wishing you a day as fantastic as you are!",
    imageSrc: "/cards/i3.png", // place in /public/cards/
  },
  {
    title: "Happy Birthday",
    subtitle: "Mom",
    message: "You're the best! Enjoy your special day.",
    imageSrc: "/cards/i2.png",
  },
  {
    title: "Happy Birthday",
    subtitle: "Buddy",
    message: "Let’s party like it’s your day—because it is!",
    imageSrc: "/cards/i1.png",
  },
];



export default function BirthdayCardPage() {
    return (
        <CommonWrapper>
            <div className="mx-auto mt-[80px] ml-[40px] mr-[40px]">
                {/* Header */}
                <div className="flex items-center justify-between w-[663px]">
                    {/* Back Button */}
                    <BackButton />
                    {/* Title */}
                    <h1 className="text-[40px] font-baloo text-[#1E1E1E] capitalize">Birthday Cards</h1>
                </div>

                {/* Search bar */}
                <div className='flex justify-center mt-10'>
                    <SearchBar />
                </div>



                {/* Filters & Rude Toggle */}

                <div className="flex flex-col mt-10">
                  
                    
                    <FilterButtons />
                    <NextButton />               
                </div>
                <div className='mt-10'> <RudeToggle /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 ">
                    {dummyCards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            message={card.message}
                            imageSrc={card.imageSrc}
                        />
                    ))}
                </div>

            </div>
        </CommonWrapper>
    );
}
