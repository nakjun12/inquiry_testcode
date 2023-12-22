import { useRQInquiries } from "../../../util/hooks/RQ/useRQInquires";
import InquiryListDisplay from "./InquiryListDisplay";
import InquiryDetail from "./inquiryDetail";

const InquiryList = () => {
  const {
    inquiries,
    selectedInquiryId,
    setSelectedInquiryId,
    handleDeleteInquiry
  } = useRQInquiries();

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
