/* eslint-disable @typescript-eslint/no-explicit-any */
// homePage.tsx
import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/home/Banner";
import ProductGrid from "@/components/home/Category";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const products = [
    { id: "cards", title: "Cards", image: "cards/p1.jpg", alt: "Cards" },
    { id: "mugs", title: "Mugs", image: "cards/p2.png", alt: "Mugs" },
    {
      id: "teddy-bears",
      title: "Teddy Bears",
      image: "cards/p3.png",
      alt: "Teddy Bears",
    },
    {
      id: "cushions",
      title: "Cushions",
      image: "/cushions.png",
      alt: "Cushions",
    },
    {
      id: "ornaments",
      title: "Ornaments",
      image: "/ornaments.png",
      alt: "Ornaments",
    },
    {
      id: "tumblers",
      title: "Tumblers",
      image: "/tumblers.png",
      alt: "Tumblers",
    },
    {
      id: "money-boxes",
      title: "Money Boxes",
      image: "/piggy.png",
      alt: "Money Boxes",
    },
    {
      id: "photo-frames",
      title: "Photo Frames",
      image: "/photo-frames.png",
      alt: "Photo Frames",
    },
    {
      id: "coasters",
      title: "Coasters",
      image: "/coasters.png",
      alt: "Coasters",
    },
  ];

  const handleClick = (item: any) => {
    navigate(`/occasion/${item.id}`);
  };

  return (
    <CommonWrapper>
      <Banner />

      {/* SearchBar
    <div className="flex justify-center mt-15 px-4">
      <SearchBar placeholder="Choose gift" />
    </div> */}

      {/* Product Grid */}
      <div className="pt-20 mb-6 bg-gray-50 px-4">
        <ProductGrid products={products} onClick={handleClick} />
      </div>
    </CommonWrapper>
  );
};

export default Home;
