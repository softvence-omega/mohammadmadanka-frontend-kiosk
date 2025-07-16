import { ShoppingCart } from "lucide-react"

export default function AddButton() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-[605px] mx-auto p-4">
      {/* Card Image Section */}
      <div className="relative w-full max-w-[512px] h-[725px]">
        <img
          src="/cards/birthday.png" // Replace with your card image path
          alt="Birthday Card Design"
          className="w-full h-full object-cover shadow-[0px_0px_8px_8px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Card Information Section */}
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Title */}
        <h1 className="text-[32px] leading-[120%] text-center capitalize text-[#1E1E1E] font-normal">Birthday Card</h1>

        {/* Description */}
        <p className="text-lg leading-[160%] text-center text-[#4A4A4A] font-normal">
          Lorem ipsum dolor sit amet consectetur. Magna fusce ipsum sodales turpis dignissim eu ullamcorper.
        </p>

        {/* Size Information */}
        <p className="text-base leading-[130%] text-center text-[#1E1E1E] font-medium">Size: Standard, 15 X 21 cm</p>
      </div>

      {/* Add To Cart Button */}
      <button className="flex flex-row mt-10 justify-center items-center px-6 py-4 gap-2 w-full max-w-[379px] h-16 bg-[#FF5757] rounded-[49px] hover:bg-[#e54545] transition-colors">
        <span className="text-white text-xl font-normal leading-[120%]">Add To Cart</span>
        <ShoppingCart className="w-8 h-8 text-white" />
      </button>
    </div>
  )
}
