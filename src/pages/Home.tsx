import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/home/Banner";
import ProductGrid from "@/components/home/Category";
import SearchBar from "@/components/shared/SearchBar";

const Home = () => {
  return (
    <CommonWrapper>
      <Banner></Banner>
      <div className="flex justify-center mt-15">
        <SearchBar />

      </div>
      <div className="mt-15 bg-gray-50">
      <ProductGrid />
    </div>
    </CommonWrapper>
  );
};

export default Home;
