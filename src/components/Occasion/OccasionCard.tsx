const occasions = [
  { title: "Cards", image: "cards/p1.jpg", alt: "Cards" },
  { title: "Mugs", image: "cards/p2.png", alt: "Mugs" },
  { title: "Teddy Bears", image: "cards/p3.png", alt: "TeddyBears" },
  { title: "Cushions", image: "/cushions.png", alt: "Cushions" },
  { title: "Ornaments", image: "/ornaments.png", alt: "Ornaments" },
  { title: "Tumblers", image: "/tumblers.png", alt: "Tumblers" },
  { title: "Money Boxes", image: "/piggy.png", alt: "Money Boxes" },
  { title: "Photo Frames", image: "/photo-frames.png", alt: "PhotoFrames" },
  { title: "Coasters", image: "/coasters.png", alt: "Coasters" },
  { title: "Cards", image: "cards/p1.jpg", alt: "Cards" },
  { title: "Mugs", image: "cards/p2.png", alt: "Mugs" },
  { title: "Teddy Bears", image: "cards/p3.png", alt: "TeddyBears" },
  { title: "Cushions", image: "/cushions.png", alt: "Cushions" },
  { title: "Ornaments", image: "/ornaments.png", alt: "Ornaments" },
  { title: "Tumblers", image: "/tumblers.png", alt: "Tumblers" },
  { title: "Money Boxes", image: "/piggy.png", alt: "Money Boxes" },

];


const OccasionCard = () => {
  return (
    <div className="w-[1000px] mx-auto flex flex-wrap justify-between gap-y-8">
      {occasions.map((item) => (
        <div
          key={item.title}
          className="relative w-[312px] h-[442px] border border-[#FF5757] rounded-2xl bg-white flex flex-col items-center"
        >
          {/* Circular Blue Background */}
          <div className="w-[272px] h-[272px] bg-[#EFFCFD] rounded-full mt-8 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.alt}
              className="max-h-[180px] object-contain"
            />
          </div>

          {/* Title */}
          <div className="absolute bottom-10 w-full text-center">
            <p className="text-[32px] font-normal capitalize text-[#1E1E1E] font-[Baloo]">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OccasionCard;
