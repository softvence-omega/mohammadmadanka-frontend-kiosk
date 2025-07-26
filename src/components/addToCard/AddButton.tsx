// components/addToCard/AddButton.tsx
import { ShoppingCart } from "lucide-react"

type AddButtonProps = {
  onAddToCart: () => void;
};

export default function AddButton({ onAddToCart }: AddButtonProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[605px] mx-auto p-4">
      <button
        onClick={onAddToCart}
        className="flex flex-row mt-10 justify-center items-center px-6 py-4 gap-2 w-full max-w-[379px] h-16 bg-[#FF5757] rounded-[49px] hover:bg-[#e54545] transition-colors"
      >
        <span className="text-white text-xl font-baloo font-normal ">Add To Cart</span>
        <ShoppingCart className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
