// pages/OccasionPage.tsx
import CommonWrapper from "@/common/CommonWrapper";
import OccasionCard from "@/components/Occasion/OccasionCard";
import SearchBar from "@/components/shared/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";

const OccasionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.state?.category;
  const categoryId = category?.id;

  const allOccasions = [
    { id: "birthday", title: "Birthday", image: "/cards/birthday.jpg", categoryId: "cards" },
    { id: "anniversary", title: "Anniversary", image: "/cards/anniversary.jpg", categoryId: "cards" },
    { id: "wedding", title: "Wedding", image: "/cards/wedding.jpg", categoryId: "cards" },
    { id: "graduation", title: "Graduation", image: "/cards/graduation.jpg", categoryId: "cards" },
    { id: "valentine", title: "Valentine's Day", image: "/cards/valentine.jpg", categoryId: "cards" },
    { id: "birthday-mugs", title: "Birthday", image: "/cards/birthday.jpg", categoryId: "mugs" },
    { id: "love-mugs", title: "Love", image: "/cards/valentine.jpg", categoryId: "mugs" },
    { id: "baby", title: "New Baby", image: "/cards/baby.jpg", categoryId: "teddy-bears" },
    { id: "birthday", title: "Birthday", image: "/cards/birthday.jpg", categoryId: "cards" },
    { id: "anniversary", title: "Anniversary", image: "/cards/anniversary.jpg", categoryId: "cards" },
    { id: "wedding", title: "Wedding", image: "/cards/wedding.jpg", categoryId: "cards" },
    { id: "graduation", title: "Graduation", image: "/cards/graduation.jpg", categoryId: "cards" },
    { id: "valentine", title: "Valentine's Day", image: "/cards/valentine.jpg", categoryId: "cards" },
    { id: "birthday-mugs", title: "Birthday", image: "/cards/birthday.jpg", categoryId: "mugs" },
    { id: "love-mugs", title: "Love", image: "/cards/valentine.jpg", categoryId: "mugs" },
    { id: "baby", title: "New Baby", image: "/cards/baby.jpg", categoryId: "teddy-bears" },  
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

  const handleClick = (occasion: any) => {
    navigate("/cards", {
      state: {
        category,
        occasion,
      },
    });
  };

  return (
    <CommonWrapper>
      <div className="flex justify-center pt-15">
        <SearchBar placeholder="Choose by Occasion" />
      </div>
      <div className="mt-15 mb-6 bg-gray-50">
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

