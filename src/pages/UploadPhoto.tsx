export default function UploadPhoto() {
    return (
        <div className="relative w-[393px] h-[852px] bg-white mx-auto font-['Nunito_Sans']">
            {/* Header */}
            <div className="absolute w-full h-[111px] bg-[#FF5757] top-0 left-0 flex justify-center items-center">
                <div
                    className="w-8 h-8" />
                <img
                    src="/collection 3.jpg"
                    alt="Mantel Worthy Logo"
                    className="h-20  mx-auto" // Adjust height as needed, object-contain to preserve aspect ratio
                />
            </div>

            {/* Title */}
            <div className="absolute top-[143px] left-1/2 transform -translate-x-1/2 text-[24px] font-medium text-[#1A1A1A] text-center leading-[31px]">
                Upload Your Photo
            </div>

            {/* Choose Photo Button */}
            <button className="absolute top-[206px] left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3 px-6 py-4 bg-[#54CDD1] text-white rounded-full shadow-sm text-[16px] font-['Baloo']">
                Choose Photo
                <img src="/icons/img.png" alt="icon" className="w-6 h-6" />
            </button>

            {/* Modal Popup with Photo Options */}
            <div className="absolute top-[270px] left-[96px] w-[202px] rounded-[8px] shadow-[0px_4px_33px_rgba(0,0,0,0.08)] bg-white flex flex-col">
                {/* Option 1 */}
                <div className="flex justify-between items-center px-4 py-2 border-b border-[#D9D9D9] rounded-t-[8px]">
                    <span className="text-[14px] text-[#1E1E1E]">Photo Library</span>
                    <div className="relative w-4 h-4">
                        <img src="/icons/addPhoto.png" alt="icon" className="absolute inset-[2px] " />
                    </div>
                </div>
                {/* Option 2 */}
                <div className="flex justify-between items-center px-4 py-2 border-b border-[#D9D9D9]">
                    <span className="text-[14px] text-[#1E1E1E]">Take Photo</span>
                    <div className="relative w-4 h-4">
                        <img src="/icons/add_a_photo.png" alt="icon" className="absolute inset-[2px] " />
                    </div>
                </div>
                {/* Option 3 */}
                <div className="flex justify-between items-center px-4 py-2 rounded-b-[8px]">
                    <span className="text-[14px] text-[#1E1E1E]">Choose File</span>
                    <div className="relative w-4 h-4">
                        <img src="/icons/folder.png" alt="icon" className="absolute inset-[2px] " />
                    </div>
                </div>
            </div>
        </div>

    );
}