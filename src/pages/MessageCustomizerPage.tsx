import CommonWrapper from "@/common/CommonWrapper";
import MessageCustomizer from "@/components/MsgCustom/msgCustom";
import BackButton from "@/components/shared/BackButton";
import NormalButton from "@/components/shared/NormalButton";
import { useNavigate } from "react-router-dom";

export default function MessageCustomizerPage() {
  const navigate = useNavigate(); 

  return (
    <CommonWrapper>
      <div className="pt-20 pb-[176px]">

        <div className="flex justify-between pb-20 px-10">
           <BackButton/>
           <NormalButton text="Save" col="#FF5757"
           onClick={() => {navigate('/preview');}}
           />
        </div>
       
        <MessageCustomizer />

      </div>
        
    </CommonWrapper>
  );
}