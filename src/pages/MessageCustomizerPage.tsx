import CommonWrapper from "@/common/CommonWrapper";
import MessageCustomizer from "@/components/MsgCustom/msgCustom";
import BackButton from "@/components/shared/BackButton";
import NormalButton from "@/components/shared/NormalButton";
import { useNavigate, useParams } from "react-router-dom";

export default function MessageCustomizerPage() {
  const navigate = useNavigate();
  const { cardId } = useParams();

  // Optional: You could fetch or find card info by cardId if needed here

  const handleSave = () => {
    // Navigate to preview page with cardId param
    navigate(`/preview/${cardId}`);
  };

  return (
    <CommonWrapper>
      <div className="pt-20 pb-[176px]">
        <div className="flex justify-between pb-20 px-10">
          <BackButton />
          <NormalButton text="Save" col="#FF5757" onClick={handleSave} />
        </div>

        <MessageCustomizer />
      </div>
    </CommonWrapper>
  );
}
