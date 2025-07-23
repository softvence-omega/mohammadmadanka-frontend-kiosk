// pages/AddToCart.tsx
import CommonWrapper from '@/common/CommonWrapper';
import AddCard from '../components/addToCard/AddCard';
import AddButton from '@/components/addToCard/AddButton';
import BackButton from '@/components/shared/BackButton';
import { useLocation, useNavigate } from 'react-router-dom';

const fakeCardData = {
  id: 1,
  title: "Birthday Card",
  image: "/cards/birthday.png",
  description: "Lorem ipsum dolor sit amet consectetur. Magna fusce ipsum sodales turpis dignissim eu ullamcorper.",
  size: "Standard, 15 X 21 cm",
  price: 49.99
};

export default function AddToCart() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("Added to cart:", fakeCardData);
    alert(`"${fakeCardData.title}" added to cart!`);
    navigate("/personalize");
    
    // You can later replace this with cart context or localStorage
  };

  return (
    <CommonWrapper>
      <div className="mx-auto pt-20 ml-[40px] mr-[40px] pb-25">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <BackButton />
          <span className="w-[61px] h-[24px] text-[20px] leading-[120%] font-normal font-['Baloo'] underline text-[#1E1E1E]">
            ${fakeCardData.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col mt-16 items-center  w-full max-w-[605px] h-[1058px] mx-auto">
          <AddCard card={fakeCardData} />
          <AddButton onAddToCart={handleAddToCart} />
        </div>
      </div>
    </CommonWrapper>
  );
}
