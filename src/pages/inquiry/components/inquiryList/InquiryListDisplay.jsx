import InquiryListItem from "./inquiryListItem";

/**
 * 문의 목록을 표시하는 컴포넌트입니다.
 *
 * @param {Object[]} inquiries - 표시할 문의 목록 배열
 * @param {Function} onSelect - 문의 항목 선택 시 호출되는 함수. 문의 ID를 인자로 받습니다.
 */
const InquiryListDisplay = ({ inquiries, onSelect }) => {
  // 문의 목록이 비어있는 경우, 안내 메시지를 표시합니다.
  if (!inquiries?.length) {
    return <p className="text-center py-4">작성한 문의 내역이 없습니다.</p>;
  }

  // 문의 목록이 있는 경우, 각 문의 항목을 InquiryListItem 컴포넌트로 표시합니다.
  return (
    <div>
      {inquiries.map((inquiry) => (
        <InquiryListItem
          key={inquiry.id}
          inquiry={inquiry}
          onSelect={() => onSelect(inquiry.id)}
        />
      ))}
    </div>
  );
};

export default InquiryListDisplay;
