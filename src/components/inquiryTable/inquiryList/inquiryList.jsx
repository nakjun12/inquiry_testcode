import { useState } from "react";
import { useRQInquiries } from "../../../util/hooks/RQ/useRQInquires";
import InquiryListDisplay from "./InquiryListDisplay";
import InquiryDetail from "./inquiryDetail";

const InquiryList = () => {
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);
  const { inquiries, deleteInquiry } = useRQInquiries();
  // 빈 의존성 배열을 전달하여 마운트될 때만 실행되게 합니다.
  const handleDeleteInquiry = (id) => {
    deleteInquiry.mutate(id, {
      onSuccess: () => {
        // 삭제 후 추가적으로 수행할 작업이 있다면 여기에 작성
        setSelectedInquiryId(null);
      },
      onError: (error) => {
        console.error("Error deleting inquiry:", error);
        // 사용자에게 에러 메시지를 표시하는 로직 추가
      }
    });
  };

  const handleInquirySelect = (id) => {
    setSelectedInquiryId(id);
    console.log(id);
  };

  const handleBack = () => {
    setSelectedInquiryId(null);
  };
  // 가져온 문의 목록을 InquiryListItem 컴포넌트로 렌더링합니다.
  const selectedInquiry = inquiries
    ? inquiries.find((inquiry) => inquiry.id === selectedInquiryId)
    : [];

  return (
    <div
      className="bg-white shadow rounded-lg"
      data-testid="inquiry-list-panel">
      {selectedInquiryId === null ? (
        <InquiryListDisplay
          inquiries={inquiries}
          onSelect={handleInquirySelect}
        />
      ) : (
        <InquiryDetail
          inquiry={selectedInquiry}
          onDelete={handleDeleteInquiry}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default InquiryList;
