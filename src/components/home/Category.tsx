// components/ProductGrid.tsx
interface Product {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface ProductGridProps {
  products: Product[];
  onClick: (item: Product) => void;
}

const ProductGrid = ({ products, onClick }: ProductGridProps) => {
  return (
    <div className="w-full max-w-[1080px] mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">
      {products.map((item) => (
        <div
          key={item.id}
          className="relative w-full sm:w-[312px] h-[442px] border border-[#FF5757] rounded-2xl bg-white flex flex-col items-center cursor-pointer"
          onClick={() => onClick(item)}
        >
          <div className="w-[220px] h-[220px] sm:w-[272px] sm:h-[272px] bg-[#EFFCFD] rounded-full mt-6 sm:mt-8 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.alt}
              className="max-h-[140px] sm:max-h-[180px] object-contain"
            />
          </div>

          <div className="absolute bottom-6 sm:bottom-10 w-full text-center">
            <p className="text-xl sm:text-[32px] font-normal capitalize text-[#1E1E1E] font-[Baloo]">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProductGrid;
