// InquiryList.js
import { useState } from "react";
import useInquiriesViewModel from "../../utils/hooks/useInquiriesViewModel";
import InquiryListDisplay from "./inquiryListDisplay";
import InquiryDetail from "./inquiryDetail";

/**
 * 문의 목록과 선택된 문의의 상세 정보를 표시하는 컴포넌트입니다.
 *
 * 문의 목록을 보여주고, 사용자가 특정 문의를 선택했을 때 해당 문의의 상세 정보를 보여줍니다.
 * 사용자가 '뒤로가기'를 클릭하면 다시 문의 목록으로 돌아갑니다.
 */
const InquiryList = () => {
  // 선택된 문의의 ID를 관리하는 state
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);

  // '뒤로가기' 버튼 핸들러: 선택된 문의 ID를 null로 초기화하여 목록을 다시 보여줌
  const handleBack = () => {
    setSelectedInquiryId(null);
  };

  // 사용자 정의 훅 useInquiriesViewModel을 사용하여 문의 목록과 삭제 핸들러를 가져옴
  const { inquiries, handleDeleteInquiry } = useInquiriesViewModel({
    handleBack
  });

  // 문의를 선택하는 핸들러: 선택된 문의의 ID를 설정함
  const handleInquirySelect = (id) => {
    setSelectedInquiryId(id);
  };

  // 선택된 문의 객체를 찾음
  const selectedInquiry = inquiries
    ? inquiries.find((inquiry) => inquiry.id === selectedInquiryId)
    : null;

  // 선택된 문의 ID가 없으면 InquiryListDisplay 컴포넌트를,
  // 있으면 InquiryDetail 컴포넌트를 보여줌
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
