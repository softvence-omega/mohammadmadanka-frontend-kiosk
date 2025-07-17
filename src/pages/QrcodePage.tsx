import CommonWrapper from "@/common/CommonWrapper";
import QRCode from "@/components/Personalise/QrCode";
import NormalButton from "@/components/shared/NormalButton";

export default function QrCodePage() {
    return (
       <CommonWrapper>
        <div className="mx-auto bg-[#00000033] pt-31 pb-80">
                    <div className="mt-0 m-48 mb-81 bg-[#EEEEEE] rounded-[16px] shadow-md flex flex-col items-center ">

                    {/* Title */}
                    <div className="mt-20 text-[#1E1E1E] text-[24px] leading-[120%] text-center font-[400] font-baloo  max-w-[431px]">
                        Scan the QR code using your mobile phone to upload a photo
                    </div>

                    {/* QR Code */}
                    <div className="w-[485px] mt-15 h-[485px] bg-cover bg-center rounded-[12px] shadow-[0px_0px_10.5px_4px_rgba(0,0,0,0.13)]" style={{ backgroundImage: "url('/icons/qrCode.png')" }} />

                    {/* Buttons */}
                    <div className="flex w-full mt-20 mb-20 justify-center">
                        {/* Cancel Button */}
                        <NormalButton text="Cancel" col="#FF5757" />
                        {/* Upload Button can go here if needed */}
                    </div>

                </div>

        </div>
            

           
         </CommonWrapper>


    );
}