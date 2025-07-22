import CommonWrapper from "@/common/CommonWrapper";
import Preview from "@/components/Personalise/Preview";

export default function PreviewPage() {
    return (
        <CommonWrapper>
            <div className="ml-10 w-[1000px] h-[1119px] bg-white border-[2px] border-[#1E1E1E] rounded-[32px] box-border">

                <div className="ml-60 w-[462px] h-[75px]">
                    <div
                        className=" w-full bg-[#dbd9d9] h-full border-1 border-black shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
                        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%)" }}

                    ></div>
                </div>
                <Preview imageSrc="/cards/i3.png" /> 
            </div>

        </CommonWrapper>
    );
}