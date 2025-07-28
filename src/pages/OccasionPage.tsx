import CommonWrapper from "@/common/CommonWrapper";
import OccasionCard from "@/components/Occasion/OccasionCard";
import SearchBar from "@/components/shared/SearchBar";
import { useNavigate, useParams } from "react-router-dom";

const OccasionPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const allOccasions = [
    { id: "birthday", title: "Birthday", image: "/cards/birthday.jpg", categoryId: "cards" },
    { id: "anniversary", title: "Anniversary", image: "/cards/anniversary.jpg", categoryId: "cards" },
    { id: "wedding", title: "Wedding", image: "/cards/wedding.jpg", categoryId: "cards" },
    { id: "graduation", title: "Graduation", image: "/cards/graduation.jpg", categoryId: "cards" },
    { id: "valentine", title: "Valentine's Day", image: "/cards/valentine.jpg", categoryId: "cards" },
    { id: "birthday-mugs", title: "Birthday", image: "/cards/birthday.jpg", categoryId: "mugs" },
    { id: "love-mugs", title: "Love", image: "/cards/valentine.jpg", categoryId: "mugs" },
    { id: "baby", title: "New Baby", image: "/cards/baby.jpg", categoryId: "teddy-bears" },
  ];

  const filteredOccasions = allOccasions.filter(
    (occasion) => occasion.categoryId === categoryId
  );

  // 🔁 Create a pseudo category object to match expected shape
  const category = {
    id: categoryId || "",
    title: categoryId?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "",
  };

  const handleClick = (occasion: any) => {
    navigate(`/cards/${occasion.id}`);
  };

  return (
    <CommonWrapper>
    {/* Search bar */}
    <div className="flex justify-center pt-15 px-4">
      <SearchBar placeholder="Choose by Occasion" />
    </div>

    {/* Occasion cards */}
    <div className=" mb-6 bg-gray-50 px-4">
      <OccasionCard
        occasions={filteredOccasions}
        category={category}
        onClick={handleClick}
      />
    </div>
  </CommonWrapper>
  );
};

export default OccasionPage;
