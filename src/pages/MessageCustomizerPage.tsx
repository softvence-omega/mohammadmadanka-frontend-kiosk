import CommonWrapper from "@/common/CommonWrapper";
import MessageCustomizer from "@/components/MsgCustom/msgCustom";
import BackButton from "@/components/shared/BackButton";

export default function MessageCustomizerPage() {
  return (
    <CommonWrapper>
      <div className="mt-20 border-1 mb-[176px]">

        <div className="mb-20">
           <BackButton/>
        </div>
       
        <MessageCustomizer />

      </div>
        
    </CommonWrapper>
  );
}