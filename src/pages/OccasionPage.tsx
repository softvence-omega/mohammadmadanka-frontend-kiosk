import CommonWrapper from "@/common/CommonWrapper";
import OccasionCard from "@/components/Occasion/OccasionCard";
import SearchBar from "@/components/shared/SearchBar";

const Home = () => {
  return (
    <CommonWrapper>
      <div className="flex justify-center mt-15">
        <SearchBar placeholder="Choose by Occasion"/>
      </div>
      <div className="mt-15 mb-6 bg-gray-50">
      <OccasionCard />
    </div>
    </CommonWrapper>
  );
};

export default Home;
