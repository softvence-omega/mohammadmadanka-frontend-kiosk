const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center p-6  rounded-xl shadow-sm">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-mantel-light-blue flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={"/placeholder.svg"}
          alt={""}
          className="w-full h-full object-contain p-2"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{}</h3>
    </div>
  );
};

export default CategoryCard;
