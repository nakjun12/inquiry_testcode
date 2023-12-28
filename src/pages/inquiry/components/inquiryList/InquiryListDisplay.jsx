import InquiryListItem from "./inquiryListItem";

const InquiryListDisplay = ({ inquiries, onSelect }) => {
  if (!inquiries?.length) {
    return <p className="text-center py-4">작성한 문의 내역이 없습니다.</p>;
  }

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
