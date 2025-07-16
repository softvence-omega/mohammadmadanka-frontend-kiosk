import CategoryCard from "../shared/CategoryCard";

const Category = () => {
  const categories = [
    {
      imageSrc: "/placeholder.svg?height=100&width=100", // Placeholder for the card image
      altText: "Greeting Card",
      categoryName: "Cards",
    },
    {
      imageSrc: "/placeholder.svg?height=100&width=100", // Placeholder for the mug image
      altText: "Red Mug",
      categoryName: "Mugs",
    },
    {
      imageSrc: "/placeholder.svg?height=100&width=100", // Placeholder for the teddy bear image
      altText: "Teddy Bear",
      categoryName: "Teddy Bears",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {categories.map((category, index) => (
        <CategoryCard category={category}></CategoryCard>
      ))}
    </div>
  );
};

export default Category;
