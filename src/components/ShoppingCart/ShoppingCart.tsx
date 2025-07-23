"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Printer, Plus, Minus } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ShoppingCard() {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <div className="flex flex-row items-start mb-10 gap-8 h-[495px] border border-gray-300 rounded-2xl bg-white">
      {/* Left side - Card Image */}
      <div className="w-[312px] h-[442px] mt-6 ml-6 shadow-[0_0_6.1px_5px_rgba(0,0,0,0.3)] justify-between  bg-cover bg-center">
        <img src="cards/i3.png" alt="Birthday Card Design" className="w-full h-full shadow-2xl" />
      </div>

      {/* Right side - Controls */}
      <div className="flex flex-col justify-between flex-1 h-full ">
        {/* Top section */}
        <div className="flex flex-row justify-between items-start w-full">
          {/* Left column - Title and buttons */}
          <div className="flex flex-col items-start w-80">
            <h1 className="text-2xl mt-4 font-semibold text-gray-900 font-['Nunito_Sans']">Birthday Card</h1>

            <div className="flex flex-col mt-8 items-start gap-5 w-full">
              {/* Edit Front Design Button */}
              <Button
                onClick={() => navigate("/personalize6")}
                className="w-[312px] h-11 bg-[#5CE1E6] hover:bg-[#4BC5CA] border border-[#5CE1E6] rounded-full text-[#EFFCFD] font-semibold font-['Montserrat']">
                <Edit className="w-6 h-6 mr-2" />
                Edit Front Design
              </Button>

              {/* Add Inside Message Button */}
              <Button
                onClick={() => navigate("/msg")}
                variant="outline"
                className="w-[312px] h-11 border border-[#5CE1E6] rounded-full text-[#5CE1E6] hover:bg-[#5CE1E6] hover:text-white font-semibold font-['Montserrat'] bg-transparent"
              >
                <Edit className="w-6 h-6 mr-2" />
                Add Inside Message
              </Button>

              <div className="w-[111.53px] h-[158px] mt-5 bg-white rounded-[4px]  shadow-[0_0_6.1px_5px_rgba(0,0,0,0.3)] flex items-center justify-center text-black text-[10px] font-medium">
                Happy Birthday
              </div>
            </div>
          </div>

          {/* Right column - Price and delete */}
          <div className="flex flex-row  items-center gap-10 mr-6 ">
            <span className="text-xl font-normal underline text-gray-900 font-['Baloo']">$49.99</span>
            <Button variant="ghost" size="icon" className="w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Trash2 className="w-6 h-6 text-[#FF5757]" />
            </Button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-row justify-between items-center w-full">
          {/* Quantity selector */}
          <div className="flex flex-col justify-end items-start gap-2">
            <div className="flex mb-6 flex-row items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="w-18 h-10 bg-[#FFEEEE] border border-gray-300 rounded-full hover:bg-red-100"
                onClick={decrementQuantity}
              >
                <Minus className="w-6 h-6 text-[#FF5757]" />
              </Button>

              <div className="w-36 h-10 bg-gray-200 border border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900 font-['Nunito_Sans']">{quantity}</span>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="w-18 h-10 bg-[#FFEEEE] border border-gray-300 rounded-full hover:bg-red-100"
                onClick={incrementQuantity}
              >
                <Plus className="w-6 h-6 text-[#FF5757]" />
              </Button>
            </div>
          </div>

          {/* Print button */}
          <Button className=" bg-[#FF5757] mb-5 mr-6 hover:bg-red-600 text-[#FFEEEE] rounded-full w-[232px] h-11 font-bold text-sm font-['Montserrat']">
            <Printer className="w-6 h-6 mr-2" />
            Print
          </Button>
        </div>
      </div>
    </div>
  )
}
